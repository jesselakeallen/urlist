var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://yournamehere:itwillbeokay@kerra-hdyhn.mongodb.net/test";
var array = [];
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myquery = { address: 'Highway 37' };
//     dbo.collection("items").deleteOne(myquery, function(err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted");
//       db.close();
//     });
//   });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = { name: "Company Inc", address: "www.google.com" };
//     dbo.collection("items").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("items", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("items").find({}).toArray(function(err, result) {
      if (err) throw err;

      i = 0;
      //array = [];
      while (i < result.length) {
         //console.log(result[i].address);
         array.push(result[i].address);
         i++;
      }
      console.log(array);
      db.close();
    });
  });

// mongoose.connect('mongodb://yournamehere:itwillbeokay@kerra-shard-00-00-hdyhn.mongodb.net:27017,kerra-shard-00-01-hdyhn.mongodb.net:27017,kerra-shard-00-02-hdyhn.mongodb.net:27017/test?ssl=true&replicaSet=kerra-shard-0&authSource=admin');
// mongoose.connect('mongodb://yournamehere:itwillbeokay@kerra-shard-00-00-hdyhn.mongodb.net:27017/test?ssl=true&replicaSet=kerra-shard-0&authSource=admin');

