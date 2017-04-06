var mongo = require('mongodb').MongoClient
var dbname = 'learnyoumongo'

var url = 'mongodb://localhost:27017/' + dbname

mongo.connect(url,function(err,db){
  if (err) return console.error(err)
 // console.log('access the db success!')

 var prices = db.collection('prices')

 prices.aggregate([
   { $match: { size: process.argv[2]}},
   { $group: { _id: "anything", average: { $avg: "$price" } } },
   { $sort: { total: -1 } }
]).toArray(function (err,documents) {
   if (err) return console.error(err)
   console.log(documents)
   console.log((+documents[0].average).toFixed(2))
 })
 db.close()
})
