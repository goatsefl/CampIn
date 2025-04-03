const mongoose = require('mongoose')
const campIn = require('../models/camp')
const { cities } = require('./cities')
const description = require('./description')
const { noun, verbs } = require('./places')
// const path = require('path')
// const image_path = ''
// campIn is the model, and the model is present in the models directory, specifically camp.js on the above one.
mongoose.connect('mongodb://localhost:27017/camp-in')
    .then(() => {
        console.log("DataBase Connected")
    }).catch(err => {
        console.error("Error connecting to database", err);
    })
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, "connection error: "));
// This here is to check if any error occurs over the connection, it will notify the above message.
// The on signifies the event is going to be live and be active every-time any event occurs.
// The once signifies, only once the event is completed, it will be shown exactly once.
// db.once('open', () => {
//     console.log("Database Connected")
// })
var min = 1000; var max = 2000;
const areas = array => array[Math.floor(Math.random() * array.length)]
const test = async () => {
    await campIn.deleteMany({});
    for (let i = 0; i < 100; i++) {
        const camp = new campIn({
            location: `${cities[i]['city']}, ${cities[i]['state']} [Longitude : ${cities[i]['longitude']} || Latitude : ${cities[i]['latitude']}]`,
            price: `${Math.abs(Math.floor(Math.random() * max) + min)}`,
            image: `${serverPath}`,
            description: description[i],
            title: `${areas(verbs)} ${areas(noun)}`
        })
        await camp.save();
    }
}
test()
    .then(() => {
        mongoose.connection.close();
    });

