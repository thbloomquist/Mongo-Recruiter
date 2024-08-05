import {createContext, useReducer} from 'react'

export const WorkoutsContext = createContext()
//new Context

export const workoutsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_WORKOUTS': 
         return {
            workouts: action.payload
         }
        case 'CREATE_WORKOUT':
            return {
            workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({children }) => {
    //useReducer hook returns state value
    //and dispatch function to update state value
    //along with initializing state with initial value

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
        //initial workouts value is null
    })

    //example usage of dispatch: dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]})

    //children is what is passed into WorkoutsContextProvider
    //(basically whats contained between the tags)
    //this will be <App /> as shown in index.js
    return (
        //if a value is specified within the context provider
        //tag that value is accessible to any of the children
        //within the tags as used in the frontend HTML
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            { children }
        </WorkoutsContext.Provider>
    )
}