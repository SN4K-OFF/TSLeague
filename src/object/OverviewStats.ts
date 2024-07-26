import { Stats } from '../interfaces/Stats'

interface SeasonMetadata {
    iconUrl: string
    rankName: string
}

export class OverviewStats {
    constructor(private stats: { [key: string]: Stats }) {}

    getSeasonReward(): string {
        return (this.stats.seasonRewardLevel.metadata as SeasonMetadata).rankName || 'Unknown'
    }

    getSeasonRewardIcon(): string {
        return (this.stats.seasonRewardLevel.metadata as SeasonMetadata).iconUrl || 'Unknown'
    }

    getTotalWins(): number {
        return this.stats.wins?.value || 0
    }

    getTotalShots(): number {
        return this.stats.shots?.value || 0
    }

    getTotalGoals(): number {
        return this.stats.goals?.value || 0
    }

    getTotalSaves(): number {
        return this.stats.saves?.value || 0
    }

    getTotalAssists(): number {
        return this.stats.assists?.value || 0
    }

    getTotalMVPs(): number {
        return this.stats.mVPs?.value || 0
    }

    getGoalShotRatio(): number {
        return this.stats.goalShotRatio?.value || 0
    }
}
