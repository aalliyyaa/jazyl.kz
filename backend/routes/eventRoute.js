const eventRouter = require('express').Router()
const { addEvent, getAllEvents, deleteEvent } =require ('../controllers/eventController') 
const  {addParticipant, deleteParticipant, getAllparticipants} = require('../controllers/partictController')

eventRouter.post ('/event', addEvent)
eventRouter.get('/events', getAllEvents)
eventRouter.delete('/events/:id', deleteEvent)

eventRouter.post('/participant', addParticipant)
eventRouter.get('/participants', getAllparticipants)
eventRouter.delete('/participants/:id', deleteParticipant)


module.exports = eventRouter