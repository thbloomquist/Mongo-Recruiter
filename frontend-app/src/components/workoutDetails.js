const WorkoutDetails = ({ workout }) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load(lbs): </strong> {workout.load}</p>
            <p><strong>Reps: </strong> {workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

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