const Workout = require('../models/workoutModels')
const mongoose = require('mongoose')

// get all workouts
const getAllWorkouts = async(req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    //the empty curly braces {} specifies no filter for data
    //which will then return ALL documents in db
    res.status(200).json(workouts)
}

// get single workout
const getWorkout = async(req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid Object ID"})
    }

    const workout = await Workout.findById(id)
    if(!workout) {
        return res.status(404).json({error: "No Such Document"})
        //we return here to exit out of this function
    } 
    
    res.status(200).json(workout)

}

// create new workout
const createNewWorkout = async(req, res) => {
    const {title, reps, load} = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!load) {
        emptyFields.push('load')
    }
    if(!reps) {
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    try {
        const newWorkout = await Workout.create({title, reps, load})
        //create() is an async function
        //need to use await to WAIT for Workout.create() to finish
        res.status(200).json(newWorkout)
        //if success status=200 (which is good)
        //and respond with newly created workout object
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete existing workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid Object ID"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    //the title of the id property in MongoDB is "_id"
    if(!workout) {
        return res.status(400).json({error: "No Such Document"})
    }

    res.status(200).json(workout)

}

// update existing workout
const updateWorkout = async (req, res) => {

    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid Object ID"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body 
        //... spreads the properties of the req.body object
        //into three individual properties
        //represented by each .
    })
    //second paramater passed in findOneAndUpdate is the json 
    //corresponding to the fields and their values to be updated
    //the first one is the filter for finding the document

    if(!workout) {
        return res.status(400).json({error: "No Such Document"})
    }
    return res.status(200).json(workout)
    //this will return the original workout
}


module.exports = {
    getAllWorkouts,
    getWorkout,
    createNewWorkout,
    updateWorkout,
    deleteWorkout
}
