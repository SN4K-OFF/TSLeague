export enum Playlist {
    CASUAL = 'Casual',
    RANKED_DUEL_1V1 = 'Ranked Duel 1v1',
    RANKED_DOUBLES_2V2 = 'Ranked Doubles 2v2',
    RANKED_STANDARD_3V3 = 'Ranked Standard 3v3',
    HOOPS = 'Hoops',
    RUMBLE = 'Rumble',
    DROPSHOT = 'Dropshot',
    SNOWDAY = 'Snowday',
    TOURNAMENT = 'Tournament Matches',
}

export const PlaylistIdMap: Record<Playlist, number> = {
    [Playlist.CASUAL]: 0,
    [Playlist.RANKED_DUEL_1V1]: 10,
    [Playlist.RANKED_DOUBLES_2V2]: 11,
    [Playlist.RANKED_STANDARD_3V3]: 13,
    [Playlist.HOOPS]: 27,
    [Playlist.RUMBLE]: 28,
    [Playlist.DROPSHOT]: 29,
    [Playlist.SNOWDAY]: 30,
    [Playlist.TOURNAMENT]: 34,
}
