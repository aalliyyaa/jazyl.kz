const mongoose = require("mongoose")
const {Schema} = mongoose



const participantSchema = new Schema({
    participant: {type: String, required: true},
    eventId: {type: Schema.Types.ObjectId, ref: 'event' }
})

const participantModel = mongoose.model('participant', participantSchema);

module.exports = participantModel