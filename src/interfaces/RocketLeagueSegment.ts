import { Stats } from './Stats'

export interface RocketLeagueSegment {
    type: string
    stats: { [key: string]: Stats }
    attributes?: {
        playlistId?: number
        season?: number
    }
    metadata: {
        name: string
    }
    expiryDate?: string
}
