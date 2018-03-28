var express = require('express')
var app = express()
const Scraper = require("@jonstuebe/scraper");

app.get('/', function (req, res) {
  //res.send('Hello World!')

  async function scrape(x) {
    const data = await Scraper.scrapeAndDetect(x);
    res.send(data.title);
    console.log(data.title);
    console.log(data.price);
    console.log(data.image);
  }
  scrape("https://www.amazon.com/dp/B01N7HEVMB/_encoding=UTF8?coliid=IFOYAHI2T2MK&colid=XHWO9NOYJCG6&psc=1");
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))