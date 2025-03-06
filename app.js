const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const campIn = require('./models/camp')
// campIn is the model, and the model is present in the models directory, specifically camp.js on the above one.
mongoose.connect('mongodb://localhost:27017/camp-in')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error: "));
// This here is to check if any error occurs over the connection, it will notify the above message.
// The on signifies the event is going to be live and be active every-time any event occurs.
// The once signifies, only once the event is completed, it will be shown exactly once.
db.once('open', () => {
    console.log("Database Connected")
})
const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/campers', async (req, res) => {
    const camps = await campIn.find({})
    res.render('campIn/index', { camps })
})
app.get('/campers/:id', async (req, res) => {
    const camper = await campIn.findById(req.params.id)
    res.render('campIn/show', { camper })
})
app.listen(3000, () => {
    console.log("Listening on Port 3000!");
})