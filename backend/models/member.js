const mongoose = require("mongoose")
const {Schema} = mongoose


const memberSchema = new Schema ({
    name: {type: String, required: true},
    isOnClass: {type:Boolean, default: false}
})



module.exports = mongoose.model('member', memberSchema)