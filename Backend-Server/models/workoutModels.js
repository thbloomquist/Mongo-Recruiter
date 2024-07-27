const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    //this object will define the workoutSchema
    title: {
        type: String,
        required: true
        //title data will be String and is required to be filled out
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})
//{timestamps: true} automatically creates a CreatedAt Property within the document for us
//and tracks the timestap of the documents creation
//it also tracks whenever a document is updated

module.exports = mongoose.model('Workout', workoutSchema)
//export MODEL using the workoutSchema Schema
//mongoose.model will automatically create a collection titled 'Workouts' 
//it pluralizes the name you give it and creates a collection
//ex: module.exports = mongoose.model('People', peopleSchema)
//the collection created would be Peoples

//we can use this model to interact with the collection it represents


