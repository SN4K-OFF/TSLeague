import { RocketLeagueSegment } from './RocketLeagueSegment'

export interface RocketLeagueDataContent {
    platformInfo: {
        platformSlug: string
        platformUserId: string
        platformUserHandle: string
        platformUserIdentifier: string
        avatarUrl: string | null
        additionalParameters: object | null
    }
    userInfo: {
        userId: string | null
        isPremium: boolean
        isVerified: boolean
        isInfluencer: boolean
        isPartner: boolean
        countryCode: string | null
        customAvatarUrl: string | null
        customHeroUrl: string | null
        customAvatarFrame: string | null
        customAvatarFrameInfo: object | null
        premiumDuration: number | null
        socialAccounts: Array<object>
        pageviews: number
        xpTier: string | null
        isSuspicious: boolean | null
    }
    metadata: {
        lastUpdated: {
            value: string
            displayValue: string
        }
        playerId: number
        currentSeason: number
    }
    segments: RocketLeagueSegment[]
    availableSegments?: {
        type: string
        attributes: {
            season: number
        }
        metadata: {
            name: string
        }
    }[]
}
