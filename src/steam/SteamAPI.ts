interface ApiResponse {
    success: number
    steamid?: string
}

interface ResolveVanityURLResponse {
    response: ApiResponse
}

export class SteamAPI {
    private static API_KEY = ''

    constructor(private input: string) {}

    public async getSteamID(): Promise<string | null> {
        try {
            const url = new URL('https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/')
            url.searchParams.append('key', SteamAPI.API_KEY)
            url.searchParams.append('vanityurl', this.input)

            const response = await fetch(url.toString())
            if (!response.ok) {
                console.error('HTTP error', response.status)
                return null
            }

            const data: ResolveVanityURLResponse = await response.json()

            if (data.response.success === 1 && data.response.steamid) {
                return data.response.steamid
            } else {
                console.error('User not found.')
                return null
            }
        } catch (error) {
            console.error('Error while searching user:', error)
            return null
        }
    }
}
