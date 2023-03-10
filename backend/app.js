const express = require("express")
const { MongoGridFSChunkError } = require("mongodb")
const mongoose = require("mongoose")
const cors = require ("cors")
require("dotenv").config()
const memberRoute = require('./routes/memberRoute')
const eventRoute = require('./routes/eventRoute')

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000

app.use(cors())

mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log('db connected'))
.catch(()=>console.log('db error'))

app.use([memberRoute, eventRoute ])

app.listen(port, ()=>{
    console.log('server is up');
})