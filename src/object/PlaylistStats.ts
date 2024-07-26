import { Stats } from '../interfaces/Stats'

interface TierMetadata {
    iconUrl: string
    name: string
}

interface DivisionMetadata {
    deltaDown: number
    deltaUp: number
    name: string
}

export class PlaylistStats {
    constructor(private stats: { [key: string]: Stats }) {}

    getRank(): string {
        return (this.stats.tier.metadata as TierMetadata).name || 'Unknown'
    }

    getDivision(): string {
        return (this.stats.tier.metadata as DivisionMetadata).name || 'Unknown'
    }

    getDivisionUp(): number {
        return (this.stats.tier.metadata as DivisionMetadata).deltaUp || 0
    }

    getDivisionDown(): number {
        return (this.stats.tier.metadata as DivisionMetadata).deltaDown || 0
    }

    getMMR(): number {
        return this.stats.rating?.value || 0
    }

    getPeak(): number {
        return this.stats.peakRating?.value || 0
    }

    getMatchesPlayed(): number {
        return this.stats.matchesPlayed?.value || 0
    }

    getStreak(): number {
        return this.stats.winStreak?.value || 0
    }
}
