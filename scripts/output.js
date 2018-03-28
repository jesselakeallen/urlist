//db

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://yournamehere:itwillbeokay@kerra-hdyhn.mongodb.net/test";
var array = [];

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("items").find({}).toArray(function(err, result) {
      if (err) throw err;

      i = 0;
      //array = [];
      while (i < result.length) {
         //console.log(result[i].input);
         array.push(result[i].input);
         i++;
      }
      console.log(array);
      db.close();
    });
  });

//scrape

const Scraper = require("@jonstuebe/scraper");
var scraped = [];

async function scrape(x) {
  const data = await Scraper.scrapeAndDetect(x);
  scraped.push(data.title);
  scraped.push(data.price);
  scraped.push(data.image);
  console.log(scraped);
}

scrape("https://www.amazon.com/dp/B01N7HEVMB/_encoding=UTF8?coliid=IFOYAHI2T2MK&colid=XHWO9NOYJCG6&psc=1");

//run with "node output.js"