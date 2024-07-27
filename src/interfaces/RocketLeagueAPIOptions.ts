import { AccountType } from '../enum/AccountType'
import { Season } from '../enum/Season'

export interface RocketLeagueAPIOptions {
    season?: Season
    accountType: AccountType
    username: string
}
