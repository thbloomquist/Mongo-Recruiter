import { WorkoutsContext } from '../context/WorkoutsContext'
import { useContext } from 'react'

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context) {
        throw Error('useWorkoutContext must be used inside a WorkoutsContextProvider')
    }

    return context
}