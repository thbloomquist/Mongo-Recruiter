import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

//components
import WorkoutDetails from '../components/workoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

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
                dispatch({type: 'SET_WORKOUTS', payload: json})
                //this uses workoutsReducer defined in WorkoutContext
                //to set our the data seen by the user
                //to be the data fetched from our database via API
            }
        }

        fetchWorkouts()
    }, [dispatch])
    //whenever dispatch is fired
    //useEffect is re run
    //this is called a dependency array
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
            <WorkoutForm />
        </div>
    )
}
//this will only work if the backend server is running
//b/c in useEffect we are attempting to use the API hosted on
//localhost:4000
export default Home