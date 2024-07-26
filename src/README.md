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

- Use **npm** to install and deploy TSLeague. [Install npm with these docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/).

```bash
npm install
```

Enjoy 🎉

**Supported operating systems**:

- Ubuntu LTS/Debian 9.x
- Windows 10/11

(Please note that TSLeague may work on other operating systems, but these are not tested nor officially supported at this time.)

**Node:**

TSLeague only supports maintenance and LTS versions of Node.js. Please refer to the <a href="https://nodejs.org/en/about/releases/">Node.js release schedule</a> for more information. NPM versions installed by default with Node.js are supported. Generally it's recommended to use yarn over npm where possible.

| TSLeague Version | Recommended | Minimum |
| ---------------  | ----------- | ------- |
| 1.0 and up       | 20.x        | 18.x    |

## License

See the [LICENSE](./LICENSE) file for licensing information.

## Example Usage

Here's a basic example of how to use the Rocket League API:

```typescript

// Example for a specific season
const api = new RocketLeagueAPI(
    'https://api.tracker.gg/api/v2/rocket-league/standard/profile/epic/SomePlayer',
    { season: Season.SEASON_28 }
);

async function getSeasonStats() {
    const data = await api.fetchData();
    if (!data) {
        console.error('Error loading data.');
        return;
    }

    try {
        // Season 28 Stats for Ranked Doubles 2v2
        const seasonStats = await api.getStats(Playlist.RANKED_DOUBLES_2V2);
        if (seasonStats) {
            console.log(`Rank: ${seasonStats.getRank()}`);
            console.log(`Rating: ${seasonStats.getMMR()}`);
            console.log(`Peak Rating: ${seasonStats.getPeak()}`);
            console.log(`Matches Played: ${seasonStats.getMatchesPlayed()}`);
            console.log(`Win Streak: ${seasonStats.getStreak()}`);
        }
    } catch (error) {
        console.error('Error fetching stats:', error);
    }
}

getSeasonStats();
```

```typescript

// Example for the current season
const api = new RocketLeagueAPI(
    'https://api.tracker.gg/api/v2/rocket-league/standard/profile/epic/SomePlayer'
);

async function getCurrentSeasonStats() {
    const data = await api.fetchData();
    if (!data) {
        console.error('Error loading data.');
        return;
    }

    try {
        // Current Season Stats for Ranked Doubles 2v2
        const currentSeasonStats = await api.getStats(Playlist.RANKED_DOUBLES_2V2);
        if (currentSeasonStats) {
            console.log(`Rank: ${currentSeasonStats.getRank()}`);
            console.log(`Rating: ${currentSeasonStats.getMMR()}`);
            console.log(`Peak Rating: ${currentSeasonStats.getPeak()}`);
            console.log(`Matches Played: ${currentSeasonStats.getMatchesPlayed()}`);
            console.log(`Win Streak: ${currentSeasonStats.getStreak()}`);
        }
    } catch (error) {
        console.error('Error fetching stats:', error);
    }
}

getCurrentSeasonStats();
```

---

Copie et colle le contenu ci-dessus dans ton fichier `.md` pour GitHub. Assure-toi de vérifier et ajuster les liens et les chemins selon tes besoins.