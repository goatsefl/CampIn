const mongoose = require('mongoose')

// Need for this file to add is to use this schema multiple times. As it requires simple usage.

const Schema = mongoose.Schema;
// The above notation is a shorthand and simpler reference usage.
// We can use new mongoose.Schema as well, for simpler notations we are going to make is simpler for reading the code.

const CampInSchema = new Schema({
    title: String,
    price: Number,
    image: String,
    description: String,
    location: String
})


module.exports = mongoose.model('CampIn', CampInSchema)