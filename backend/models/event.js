const mongoose = require("mongoose")
const {Schema} = mongoose
const dayjs = require('dayjs')



const eventSchema = new Schema ({
    event: {type: String, required: true},
    description: {type: String, required: true},
    date:{type: Date, required: true}


})


module.exports = mongoose.model('event', eventSchema)
