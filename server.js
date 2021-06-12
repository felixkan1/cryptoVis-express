const express = require('express');
const cors = require('cors');
const googleNewsScraper = require('google-news-scraper');
const app = express();

app.get('/googleNews/:id', cors(), async (req, res) => {
  const coin = req.params.id;
  const articles = await googleNewsScraper({
    searchTerm: `${coin} crypto`,
    prettyURLs: false,
    timeframe: '24h',
    puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  res.json(articles);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
