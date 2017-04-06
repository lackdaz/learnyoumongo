var mongo = require('mongodb').MongoClient
var argv = process.argv
var targetAge = process.argv[2]

// console.log(targetAge)
// console.log(argv)

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
  if (err) return console.error(err)
 // console.log('access the db success!')

 var parrots = db.collection('parrots')

 parrots.find({age: {$gt: +targetAge}},{name: 1, age: 1, _id: 0}).toArray(function (err,documents) {
   if (err) return console.error(err)
   console.log(documents)
 })
 db.close()
})
