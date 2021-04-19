const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'findMyRestaurant'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error)
        return console.log('unable to connect to db')

    console.log("connected successfully")
    const db = client.db(databaseName)
    //1.1 - Write a MongoDb query to display all the documents in the restaurant collection
    // db.collection('rests').find().toArray((error, res) => {
    //     console.log("question: 1.1")
    //     console.log(res)
    // })


    // //1.2 - Write a MongoDb query to display all restaurants that have a specific cuisine
    // db.collection('rests').find({ cuisine: 'asian' }).toArray((error, res) => {
    //     console.log("question: 1.2")
    //     console.log(res)
    // })

    // //1.3 - Write a MongoDb query that displays only kosher restaurants
    // db.collection('rests').find({ kosher: true }).toArray((error, res) => {
    //     console.log("question: 1.3")
    //     console.log(res)
    // })


    // //1.4 - Write a MongoDb query that displays only a specific cities restaurants
    // db.collection('rests').find({ "address.city": 'Holon' }).toArray((error, res) => {
    //     console.log("question: 1.4")
    //     console.log(res)
    // })


    // //1.5 - Write a MongoDb query to display a specific restaurants address
    // db.collection('rests').find({ "address.street": 'Herzel 15',"address.city": 'Holon' }).toArray((error, res) => {
    //     console.log("question: 1.5")
    //     console.log(res)
    // })

    // //1.6 - Write a MongoDb query to display a specific restaurants coordinates
    // db.collection('rests').find({ "address.coordinates": [20.46574,-40.6774] }).toArray((error, res) => {
    //     console.log("question: 1.6")
    //     console.log(res)
    // })
    //1.7 - Write a MongoDb query that should display all restaurants in ascending order by restaurant name
    // db.collection('rests').find().sort({ name: 1 }).toArray((error, res) => {
    //     console.log("question: 1.7")
    //     console.log(res)
    // })
    // 1.8 - Write a MongoDb query that should display all restaurants in ascending order by city names.
    // db.collection('rests').find().sort({ "address.city": 1 }).toArray((error, res) => {
    //     console.log("question: 1.8")
    //     console.log(res)
    // })
    // 1.9 - Update a specific restaurant's name
    // db.collection('rests').updateOne({name: 'coconut jam'}, {$set: {name: 'strawberry jam'}})
    // 1.10 - Update a specific restaurant by adding a new review.
    // db.collection('rests').updateOne({name: 'strawberry jam'}, {$set: {"reviews.0.score": 5}})
    // 1.11 - Update all restaurants to be kosher
    // db.collection('rests').updateMany({}, {$set: {kosher: true}}) 
    // 1.12 - Delete a specific restaurant
    // db.collection('rests').deleteOne({ "name": "bombay" })
    // 1.13 - Delete all restaurants
    // db.collection('rests').deleteMany({})
    // 1.14 - Increment a specific restaurants score by 2
    // db.collection('rests').updateOne(
    //     { name: "strawberry jam" },
    //     { $inc: { "reviews.0.score": 2 } }
    // )
    // 1.15 - Decrement a specific restaurants score by 1
    // db.collection('rests').updateOne(
    //     { name: "strawberry jam" },
    //     { $inc: { "reviews.0.score": -1 } }
    // )
    //2.2
    // db.collection('rests').find({}).forEach((r)=>{
    //     console.log(r.address.city)
    // })

    //3.1 - Query for restaurant names that start with a specific alphabet
    // db.collection('rests').find({}).toArray((error, res) => {
    //     console.log(res.filter((r) => {
    //         return r.name.startsWith("s")
    //     }))
    // })
    //3.2 - Query how many documents you have from the restaurant collection.
    // db.collection('rests').find().count().then((res) => {
    //     console.log(res)
    // })
    // 3.3 -Write a MongoDb query to get restaurants that include reviews from a specific date.
    // db.collection('rests').find({}).toArray((error, res) => {
    //     res.forEach((r) => {
    //         const filtered = r.reviews.filter((r2) => {
    //             const date = new Date('01/01/2017')
    //             return r2.date > date
    //         })
    //         console.log(filtered)
    //     })
    // })
})

/*
db.collection('rests').insertMany([
            {
              name: "bombay",
              address: {
                city: "Holon",
                street: "Herzel 15",
                coordinates: [-77.46574, 40.6774],
              },
              cuisine: "indian",
              kosher: true,
              reviews: [
                {
                  date: new Date("2016-01-01"),
                  score: 7,
                },
                {
                  date: new Date("2019-01-01"),
                  score: 3,
                },
                {
                  date: new Date("2018-01-01"),
                  score: 8,
                },
              ],
            },
            {
              name: "falafel 5 shekels",
              address: {
                city: "Bat-Yam",
                street: "Histradrut 85",
                coordinates: [-70.46574, 10.6774],
              },
              cuisine: "street food",
              kosher: false,
              reviews: [
                {
                  date: new Date("2019-01-01"),
                  score: 3,
                },
                {
                  date: new Date("2016-01-01"),
                  score: 8,
                },
                {
                  date: new Date("2020-01-01"),
                  score: 4,
                },
              ],
            },
            {
              name: "asian delight",
              address: {
                city: "Tel Aviv",
                street: "Balfur 15",
                coordinates: [-10.46574, 30.6774],
              },
              cuisine: "asian",
              kosher: true,
              reviews: [
                {
                  date: new Date("2020-01-01"),
                  score: 3,
                },
                {
                  date: new Date("2018-01-01"),
                  score: 8,
                },
                {
                  date: new Date("2016-01-01"),
                  score: 9,
                },
              ],
            },
            {
              name: "coconut jam",
              address: {
                city: "Tel Aviv",
                street: "Stam Adress 15",
                coordinates: [20.46574, -40.6774],
              },
              cuisine: "african",
              kosher: true,
              reviews: [
                {
                  date: new Date("2017-01-01"),
                  score: 10,
                },
                {
                  date: new Date("2016-01-01"),
                  score: 8,
                },
                {
                  date: new Date("2019-01-01"),
                  score: 6,
                },
              ],
            },
            {
              name: "rice and noodles",
              address: {
                city: "Holon",
                street: "Bla Bla 15",
                coordinates: [20.46574, 10.6774],
              },
              cuisine: "asian",
              kosher: false,
              reviews: [
                {
                  date: new Date("2016-01-01"),
                  score: 1,
                },
                {
                  date: new Date("2019-01-01"),
                  score: 6,
                },
                {
                  date: new Date("2019-01-01"),
                  score: 2,
                },
              ],
            },
            {
              name: "thailand paradise",
              address: {
                city: "Holon",
                street: "Bla 13",
                coordinates: [-77.46574, 40.6774],
              },
              cuisine: "asian",
              kosher: false,
              reviews: [
                {
                  date: new Date("2020-01-01"),
                  score: 7,
                },
                {
                  date: new Date("2019-01-01"),
                  score: 6,
                },
                {
                  date: new Date("2020-01-01"),
                  score: 2,
                },
              ],
            },
          ])
          */