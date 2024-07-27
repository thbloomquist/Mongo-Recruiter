require('dotenv').config()
//require dotenv to be installed to run server.js
//then invoke it using .config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express()
//invokes the express application

//middleware
app.use(express.json())
//^ this allows us to read requests that have JSON body data contained within them
//if it does it parses it and attaches it to the request object in our router functions
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
    //the next parameter/function makes sure that this middleware
    //terminates once done
    //going onto the NEXT app.function()
})

//routes we defined in workouts.js
app.use('/api/workouts', workoutRoutes)
//when a request is fired to /api/workouts ROUTE
//use workoutRoutes defined in workouts.js

//connect to Mongo Atlas DB
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    //listen for requests on port 4000
    app.listen(process.env.PORT, () => {
        console.log('Successfully Connected to Mongo Atlas DB - Cluster0')
        console.log('Listening on port 4000!')
    })
 })
 .catch((error) => {
    console.log(error)
 })

