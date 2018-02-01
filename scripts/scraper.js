const Scraper = require("@jonstuebe/scraper");

async function scrape(x) {
  const data = await Scraper.scrapeAndDetect(x);
  console.log(data.title);
  console.log(data.price);
  console.log(data.image);
}

scrape("https://www.amazon.com/dp/B01N7HEVMB/_encoding=UTF8?coliid=IFOYAHI2T2MK&colid=XHWO9NOYJCG6&psc=1");