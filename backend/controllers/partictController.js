const participantModel = require ('../models/participant')

//participant 

const addParticipant = async (req, res)=>{
    
    try{
        const newParticipant = await new participantModel({
            participant: req.body.participant,
            eventId: req.body.eventId
        })

        const saveParticipant = await newParticipant.save()
        res.status(200).json(saveParticipant)
    }
    catch(err){res.json(err)}
}

const getAllparticipants =  async (req, res)=>{
    try{
        const all = await participantModel.find({})
        res.status(200).json(all)
    }
    catch(err){res.json(err)}
}

 const deleteParticipant = async (req, res)=>{
    try{
        const deleteEvent = await participantModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Participant deleted')
    }
    catch(err){res.json(err)}
}

module.exports = {addParticipant, deleteParticipant, getAllparticipants}
