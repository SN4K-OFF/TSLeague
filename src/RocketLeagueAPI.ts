import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

import { createLogger } from './utils/Logger'

import { RocketLeagueData } from './interfaces/RocketLeagueData'
import { RocketLeagueAPIOptions } from './interfaces/RocketLeagueAPIOptions'
import { Playlist, PlaylistIdMap } from './enum/Playlist'
import { ProxyManager } from './proxy/ProxyManager'
import { OverviewStats } from './object/OverviewStats'
import { PlaylistStats } from './object/PlaylistStats'
import { AccountType } from './enum/AccountType'
import { SteamAPI } from './steam/SteamAPI'

puppeteer.use(StealthPlugin())
const logger = createLogger()

export class RocketLeagueAPI {
    private proxyManager = new ProxyManager()
    private url: string = 'https://api.tracker.gg/api/v2/rocket-league/standard/profile'
    private data: RocketLeagueData | null = null

    constructor(private options: RocketLeagueAPIOptions) {
        if (this.options.accountType === AccountType.STEAM) {
            const steamAPI = new SteamAPI(this.options.username)
            const steamId = steamAPI.getSteamID()
            this.url += `/steam/${steamId}`
        } else if (this.options.accountType === AccountType.EPIC)
            this.url += `/epic/${this.options.username}`

        if (options.season) this.url += `/segments/playlist?season=${options.season}`
    }

    public async fetchData(): Promise<RocketLeagueData | null> {
        const proxy = this.proxyManager.getRandomProxy()
        logger.info(`Using proxy: ${proxy}`)

        const browser = await puppeteer.launch({
            headless: true,
            executablePath: '/usr/bin/chromium-browser',
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--single-process',
                '--disable-gpu',
                `--proxy-server=${proxy}`,
            ],
        })

        try {
            const page = await browser.newPage()

            const response = await page.goto(`${this.url}`, {
                waitUntil: 'domcontentloaded',
            })

            if (!response || response.status() !== 200) {
                logger.error(`Failed to load page. Status: ${response?.status()}`)
                return null
            }

            const bodyText: string = await page.evaluate(() => document.body?.textContent ?? '')

            try {
                const parsedData: unknown = JSON.parse(bodyText)

                if (this.isRocketLeagueData(parsedData)) this.data = parsedData
                else if (this.isRocketLeagueSegmentArray(parsedData))
                    this.data = { data: parsedData }
                else {
                    logger.error('Invalid data format.')
                    return null
                }

                return this.data
            } catch (parseError) {
                logger.error('Error parsing data:', parseError)
                return null
            }
        } catch (fetchError) {
            logger.error('Error fetching data:', fetchError)
            return null
        } finally {
            await browser.close()
        }
    }

    private isRocketLeagueData(data: any): data is RocketLeagueData {
        return typeof data === 'object' && data !== null && 'data' in data
    }

    private isRocketLeagueSegmentArray(data: any): data is RocketLeagueData['data'] {
        return Array.isArray(data)
    }

    public async getStats(playlist: Playlist): Promise<PlaylistStats | null> {
        if (!this.data) await this.fetchData()

        if (this.data) {
            const segments = Array.isArray(this.data.data)
                ? this.data.data
                : this.data.data.segments
            const stats = segments.find(
                segment => segment.attributes?.playlistId === PlaylistIdMap[playlist],
            )
            if (stats && stats.stats) return new PlaylistStats(stats.stats)
        }
        logger.error(`Stats for playlist ${playlist} not found.`)
        return null
    }

    public async getGlobalStats(): Promise<OverviewStats | null> {
        if (!this.data) await this.fetchData()

        if (this.data) {
            const segments = Array.isArray(this.data.data)
                ? this.data.data
                : this.data.data.segments
            const overviewSegment = segments.find(segment => segment.type === 'overview')
            if (overviewSegment && overviewSegment.stats)
                return new OverviewStats(overviewSegment.stats)
        }
        logger.error('Global stats not found.')
        return null
    }
}
