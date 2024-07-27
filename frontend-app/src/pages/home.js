import { useEffect, useState } from 'react'

//components
import WorkoutDetails from '../components/workoutDetails'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)
    //this creates states
    //that can be updated with dynamic data

    useEffect(() => {
        //useEffect fires a function
        //when the useEffect component is fired
        //everytime the code runs useEffect in a sense
        //it fires this function
        const fetchWorkouts = async () => {
            const response = await fetch('api/workouts')
            const json = await response.json()
            //^ this parses the JSON and converts it into an array of JSON objects

            if(response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])
    //to prevent useEffect from firing multiple times
    //we pass in an empty array [] as a parameter
    //this array is the dependency array
    //so now useEffect will ony fire once
    //and that is when it first renders
    return(
        <div className = "home">
            <div className = "workouts">
                {workouts && workouts.map((workout) => (
                    //this is contained in normal parentheses
                    //not curly brackets
                    //because it returns a template
                    //and not an object
                    //<p key={workout._id}>{workout.title}</p>
                    // ^ the previous line will print each workout.title field
                    // for each unique workout._id in our workouts array
                    <WorkoutDetails key={workout._id} workout={workout}/>
                    //READ ME!
                    //see workoutDetails.js README!
                    //READ ME!
                ))}
            </div>
        </div>
    )
}
//this will only work if the backend server is running
//b/c in useEffect we are attempting to use the API hosted on
//localhost:4000
export default Home