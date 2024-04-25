import { useEffect, useState } from 'react'
import './workoutCard.css'
const WorkoutCard = () => {
    const kilogram = "kg"
    const [workouts, setWorkouts] = useState(null)
    const getData = () => {
        const workout = [
            {
                exercise: "Abs",
                sets: "100",
                Repts: "200",
                weight: "120",
                category: "cardio"
            },
            {
                exercise: "Chest",
                sets: "100",
                Repts: "200",
                weight: "120",
                category: "cardio"
            },
            {
                exercise: "Legs",
                sets: "100",
                Repts: "200",
                weight: "120",
                category: "Balance"
            },
            {
                exercise: "Pushaps",
                sets: "20",
                Repts: "100",
                weight: "70",
                category: "Strength"
            },
        ]
        setWorkouts(workout)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='workoutContainer'>
            {workouts?.length > 0 && workouts.map((item,index)=>{
                return(
                    <div className='workout-card'>
                <h1 className='exercise-header'>
                    Cardio Workout
                </h1>
                <div className='workoutDetails'>
                    <div>
                        <span>Sets:</span>
                        <span>60</span>
                    </div>
                    <div>
                        <span>Rept:</span>
                        <span>60</span>
                    </div>
                    <div>
                        <span>Weights:</span>
                        <span>60  {kilogram}</span>
                    </div>
                    <div>
                        <span>Category:</span>
                        <span style={{ color: 'white', letterSpacing: '2px' }}>Cardio</span>
                    </div>
                    <div>
                        <span>Notes:</span>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className='workoutbtns'>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </div>

            </div>
                )
            })}
            
        </div>
    )
}

export default WorkoutCard
