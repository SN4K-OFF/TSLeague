<p align="center">
  <a href="https://strapi.io/#gh-light-mode-only">
    <img src="https://sn4k.fr/asset/static/img/TSLeague.png" width="318px" alt="Strapi logo" />
  </a>
</p>

<h3 align="center">Open-source Rocket League API written in TypeScript</h3>
<p align="center">The first open-source Rocket League API written in TypeScript, flexible and fully customizable with powerful features.</p>

<br />

<p align="center">
  <a href="https://www.npmjs.org/package/@strapi/strapi">
    <img src="https://img.shields.io/badge/npm@latest-v10.8.1-blue" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/@strapi/strapi">
    <img src="https://img.shields.io/badge/NodeJS-v10.8.1-green" alt="NODEJS Version" />
  </a>
</p>

<br>
<br>

## Getting Started

Read this Getting Started tutorial to set up your project.

### ⏳ Installation

Install TSLeague:

-   Use **npm** to install and deploy TSLeague.
    [Install npm with these docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/).

```bash
npm install
```

Enjoy 🎉

**Supported operating systems**:

-   Ubuntu LTS/Debian 9.x
-   Windows 10/11

(Please note that TSLeague may work on other operating systems, but these are not tested nor
officially supported at this time.)

**Node:**

TSLeague only supports maintenance and LTS versions of Node.js. Please refer to the
<a href="https://nodejs.org/en/about/releases/">Node.js release schedule</a> for more information.
NPM versions installed by default with Node.js are supported. Generally it's recommended to use yarn
over npm where possible.

| TSLeague Version | Recommended | Minimum |
| ---------------- | ----------- | ------- |
| 1.0 and up       | 20.x        | 18.x    |

## License

See the [LICENSE](./LICENSE) file for licensing information.

## Example Usage

Here's a basic example of how to use the Rocket League API:

**Specific Season:**

```typescript
// Example for a specific season
const api = new RocketLeagueAPI(
    'https://api.tracker.gg/api/v2/rocket-league/standard/profile/epic/SomePlayer',
    { season: Season.SEASON_28 },
)

async function getSeasonStats() {
    const data = await api.fetchData()
    if (!data) {
        this.logger.error('Error loading data.')
        return
    }

    try {
        // Season 28 Stats for Ranked Doubles 2v2
        const seasonStats = await api.getStats(Playlist.RANKED_DOUBLES_2V2)
        if (seasonStats) {
            this.logger.log(`Rank: ${seasonStats.getRank()}`)
            this.logger.log(`Division: ${currentSeasonStats.getDivision()}`)
            this.logger.log(`Division Up: ${currentSeasonStats.getDivisionUp()}`)
            this.logger.log(`Division Down: ${currentSeasonStats.getDivisionDown()}`)
            this.logger.log(`Rating: ${seasonStats.getMMR()}`)
            this.logger.log(`Peak Rating: ${seasonStats.getPeak()}`)
            this.logger.log(`Matches Played: ${seasonStats.getMatchesPlayed()}`)
            this.logger.log(`Win Streak: ${seasonStats.getStreak()}`)
        }
    } catch (error) {
        this.logger.error('Error fetching stats:', error)
    }
}
```

**Current Season:**

```typescript
// Example for the current season
const api = new RocketLeagueAPI(
    'https://api.tracker.gg/api/v2/rocket-league/standard/profile/epic/SomePlayer',
)

async function getCurrentSeasonStats() {
    const data = await api.fetchData()
    if (!data) {
        this.logger.error('Error loading data.')
        return
    }

    try {
        // Current Season Stats for Ranked Doubles 2v2
        const currentSeasonStats = await api.getStats(Playlist.RANKED_DOUBLES_2V2)
        if (currentSeasonStats) {
            this.logger.log(`Rank: ${currentSeasonStats.getRank()}`)
            this.logger.log(`Division: ${currentSeasonStats.getDivision()}`)
            this.logger.log(`Division Up: ${currentSeasonStats.getDivisionUp()}`)
            this.logger.log(`Division Down: ${currentSeasonStats.getDivisionDown()}`)
            this.logger.log(`Rating: ${currentSeasonStats.getMMR()}`)
            this.logger.log(`Peak Rating: ${currentSeasonStats.getPeak()}`)
            this.logger.log(`Matches Played: ${currentSeasonStats.getMatchesPlayed()}`)
            this.logger.log(`Win Streak: ${currentSeasonStats.getStreak()}`)
        }
    } catch (error) {
        this.logger.error('Error fetching stats:', error)
    }
}
```

**Global Stats:** Here's a basic example of how to get the global stats:

_Warning: use current season for fetch global stats_

```typescript
// Example for the global stats
const api = new RocketLeagueAPI(
    'https://api.tracker.gg/api/v2/rocket-league/standard/profile/epic/SomePlayer',
)

async function getGlobalStats() {
    const data = await api.fetchData()
    if (!data) {
        this.logger.error('Error loading data.')
        return
    }

    try {
        // Global Stats
        const globalStats = await api.getGlobalStats()
        if (globalStats) {
            this.logger.log(`Season Reward: ${globalStats.getSeasonReward()}`) //Rank name: Supersonic Legend
            this.logger.log(`Season Reward Icon: ${globalStats.getSeasonRewardIcon()}`) //Rank Icon
            this.logger.log(`Wins: ${globalStats.getTotalWins()}`)
            this.logger.log(`Shots: ${globalStats.getTotalShots()}`)
            this.logger.log(`Goals: ${globalStats.getTotalGoals()}`)
            this.logger.log(`Saves: ${globalStats.getTotalSaves()}`)
            this.logger.log(`Assists: ${globalStats.getTotalAssists()}`)
            this.logger.log(`MVPs: ${globalStats.getTotalMVPs()}`)
            this.logger.log(`Goal Shot Ratio: ${globalStats.getGoalShotRatio()}`)
        }
    } catch (error) {
        this.logger.error('Error fetching stats:', error)
    }
}
```
