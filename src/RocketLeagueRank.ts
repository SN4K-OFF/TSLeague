export class RocketLeagueRank {
    static readonly SUPERSONIC_LEGEND = new RocketLeagueRank('Supersonic Legend')
    static readonly GRAND_CHAMPION_III = new RocketLeagueRank('Grand Champion III')
    static readonly GRAND_CHAMPION_II = new RocketLeagueRank('Grand Champion II')
    static readonly GRAND_CHAMPION_I = new RocketLeagueRank('Grand Champion I')
    static readonly CHAMPION_III = new RocketLeagueRank('Champion III')
    static readonly CHAMPION_II = new RocketLeagueRank('Champion II')
    static readonly CHAMPION_I = new RocketLeagueRank('Champion I')
    static readonly DIAMOND_III = new RocketLeagueRank('Diamond III')
    static readonly DIAMOND_II = new RocketLeagueRank('Diamond II')
    static readonly DIAMOND_I = new RocketLeagueRank('Diamond I')
    static readonly PLATINUM_III = new RocketLeagueRank('Platinum III')
    static readonly PLATINUM_II = new RocketLeagueRank('Platinum II')
    static readonly PLATINUM_I = new RocketLeagueRank('Platinum I')
    static readonly GOLD_III = new RocketLeagueRank('Gold III')
    static readonly GOLD_II = new RocketLeagueRank('Gold II')
    static readonly GOLD_I = new RocketLeagueRank('Gold I')
    static readonly SILVER_III = new RocketLeagueRank('Silver III')
    static readonly SILVER_II = new RocketLeagueRank('Silver II')
    static readonly SILVER_I = new RocketLeagueRank('Silver I')
    static readonly BRONZE_III = new RocketLeagueRank('Bronze III')
    static readonly BRONZE_II = new RocketLeagueRank('Bronze II')
    static readonly BRONZE_I = new RocketLeagueRank('Bronze I')
    static readonly UNRANKED = new RocketLeagueRank('Unranked')

    private constructor(public readonly name: string) {}

    public toString(): string {
        return this.name
    }

    public static fromString(rankName: string): RocketLeagueRank | undefined {
        return (Object.values(RocketLeagueRank) as RocketLeagueRank[]).find(
            rank => rank.name === rankName,
        )
    }
}
