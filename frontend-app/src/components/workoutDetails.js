import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

//date fns import
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async() => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        //this sends a DELETE request to the API
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load(lbs): </strong> {workout.load}</p>
            <p><strong>Reps: </strong> {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
            <span style={{top: "80px"}} className="material-symbols-outlined">Edit</span>
        </div>
    )
}

//TODO: Implement Edit Functionality
// must decide how to display fields for user to update
// whether it changes the document theyre using or takes them to a seperate page

export default WorkoutDetails

//READ ME!!
//for whatever reason the first letter of this
//MUST be capitalized or it doesnt work
//it might have something to do with the fact
//that it's a custom tag
//and HTML doesn't recognize custom tags
//unless the first letter is capitalized
//idk but that seems like a huge time suck
//if you forget it so
//READ ME!!!