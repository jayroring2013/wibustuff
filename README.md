# 🎌 AnimeTrend

Live anime rankings powered by the [Jikan API](https://jikan.moe/) (MyAnimeList).

## Features
- 🔴 Airing Now / Upcoming / Most Popular / Most Favorited
- 🔍 Search across all anime
- 🎭 Filter by genre
- 📄 Detailed anime modal with ratings
- ⭐ Personal rating widget
- 📱 Fully responsive

## Setup

### 1. Clone & install
```bash
git clone https://github.com/YOUR_USERNAME/anime-trend.git
cd anime-trend
npm install
```

### 2. Set your repo name in vite.config.js
```js
base: '/anime-trend/',  // ← change to your actual repo name
```

### 3. Run locally
```bash
npm run dev
```

### 4. Deploy to GitHub Pages

**Option A — GitHub Actions (auto on every push):**
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — it deploys automatically ✅

**Option B — Manual deploy:**
```bash
npm run build
npm run deploy
```
Then set Pages source to the `gh-pages` branch.

## Live URL
`https://YOUR_USERNAME.github.io/anime-trend/`
