var mongo = require('mongodb').MongoClient
var collectionName = process.argv[2]

var url = 'mongodb://localhost:27017/' + process.argv[2]

mongo.connect(url,function(err,db){
  if (err) return console.error(err)
 // console.log('access the db success!')

 var collection = db.collection(process.argv[3])

 collection.remove({_id: process.argv[4]}).toArray(function (err,documents) {
   if (err) return console.error(err)
   console.log(documents)
 })
 db.close()
})
