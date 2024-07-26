import { Stats } from '../interfaces/Stats'

import { RocketLeagueDataContent } from './RocketLeagueDataContent'

export interface RocketLeagueData {
    data: RocketLeagueDataContent | RocketLeagueSegment[]
    expiryDate?: string
}

interface RocketLeagueSegment {
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
