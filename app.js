const express = require('express');
const mongoose = require('mongoose')
const path = require('path')
const campIn = require('./models/camp')
const methodOverride = require('method-override');
const info = require('./seeds/description');
const app = express();
// The express.Router creates a router object which will act as a organize for our requests as they become bundled up.
// Eg : router.route("/:id").get(async()).post(async()).put(async()).delete(async())

// This way, it will make the routes cleaner and simpler to manage.
const router = express.Router();
// campIn is the model, and the model is present in the models directory, specifically camp.js on the above one.
mongoose.connect('mongodb://localhost:27017/camp-in')
const ejsMate = require('ejs-mate');
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error: "));
// This here is to check if any error occurs over the connection, it will notify the above message.
// The on signifies the event is going to be live and be active every-time any event occurs.
// The once signifies, only once the event is completed, it will be shown exactly once.
db.once('open', () => {
    console.log("Database Connected")
})
async function updateDescriptions(camps) {
    const operations = camps.map((camp, index) => ({
        updateOne: {
            filter: { _id: camp._id },
            update: { $set: { description: info[index] } }
        }
    }))
    await campIn.bulkWrite(operations)
}

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/images', express.static(path.join(__dirname, '/seeds/images')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

// app.route can also be used to functionally curate different routes, if the app isn't complex enough.
app.route('/')
    .get((req, res) => {
        res.render('home')
    })
app.route('/campers')
    .get(async (req, res) => {
        const camps = await campIn.find({});
        res.render('campIn/index', { camps })
    })
    .post(async (req, res) => {
        console.log(req.body.camper)
        const camp = new campIn(req.body.camper);
        await camp.save();
        res.redirect(`/campers/${camp._id}`)
    });
app.get('/campers/new', async (req, res) => {
    res.render('campIn/new');
})
app.route('/campers/:id')
    .get(async (req, res) => {
        const camper = await campIn.findById(req.params.id)
        res.render('campIn/show', { camper })
    })
    .put(async (req, res) => {
        console.log(req.body.camper);
        const camper = await campIn.findByIdAndUpdate(req.params.id, req.body.camper)
        res.redirect(`/campers/${camper._id}`)
    })
    .delete(async (req, res) => {
        await campIn.findByIdAndDelete(req.params.id);
        res.redirect('/campers');
    })

app.get('/campers/:id/edit', async (req, res) => {
    const { id } = req.params;
    const camper = await campIn.findById(id);
    res.render('campIn/edit', { camper })
})
app.listen(3000, () => {
    console.log("Listening on Port 3000!");
})