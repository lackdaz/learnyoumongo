var mongo = require('mongodb').MongoClient
var usersName = process.argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err,db){
  if (err) return console.error(err)
 // console.log('access the db success!')

 var users = db.collection('users')

 users.update({username: 'tinatime'}, {$set:{age: 40}}).toArray(function (err,documents) {
   if (err) return console.error(err)
   console.log(documents)
 })
 db.close()
})
