var mongo = require('mongodb').MongoClient
var dbname = 'learnyoumongo'

var url = 'mongodb://localhost:27017/' + dbname

mongo.connect(url,function(err,db){
  if (err) return console.error(err)
 // console.log('access the db success!')

 var parrots = db.collection('parrots')

 parrots.count({age: {$gt: +process.argv[2]}},function (err,documents) {
   if (err) return console.error(err)
   console.log(documents)
 })
 db.close()
})
