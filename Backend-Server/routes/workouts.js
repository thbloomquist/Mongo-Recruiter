const express = require('express')
const {
    createNewWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


const router = express.Router()
//creates an instance of the express router

//GET all workout documents
router.get('/', getAllWorkouts)

//GET single workout document
router.get('/:id', getWorkout)

//POST new workout document (create new workout document)
router.post('/', createNewWorkout)

//DELETE existing workout document
router.delete('/:id', deleteWorkout)

//PATCH (update) existing workout document
router.patch('/:id', updateWorkout)




module.exports = router