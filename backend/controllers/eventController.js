const eventModel = require ('../models/event')

 const addEvent = async (req, res)=>{
    console.log("1");
    console.log(req.body)
    try{
        const newEvent = await new eventModel({
            event: req.body.event,
            description: req.body.description,
            date: req.body.date
        })

        const saveEvent = await newEvent.save()
        res.status(200).json(saveEvent)
    }
    catch(err){res.json(err)}
}

 const getAllEvents = async (req, res)=>{
    try{
        const allEvents = await eventModel.find({})
        res.status(200).json(allEvents)
    }
    catch(err){res.json(err)}
}



 const deleteEvent = async (req, res)=>{
    try{
        const deleteEvent = await eventModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Item deleted')
    }
    catch(err){res.json(err)}
}



module.exports = {addEvent, getAllEvents, deleteEvent}
