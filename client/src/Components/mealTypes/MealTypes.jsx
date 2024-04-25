import './mealType.css'

const MealTypes = () => {
    const dailyMeals = [
        {
            MealType: "BreakFast",
            FoodName: "Brown Bread",
            Quantity: "200gram",
            Calories: "100cal",
            Protien: "50gram",
            Carbohydrates: "30gram",
            Fat: "150gram",
            Day: "Friday"
        },
        {
            MealType: "Lunch",
            FoodName: "Brown Bread",
            Quantity: "200gram",
            Calories: "100cal",
            Protien: "50gram",
            Carbohydrates: "30gram",
            Fat: "150gram",
            Day: "Friday"
        },
        {
            MealType: "Dinner",
            FoodName: "Brown Bread",
            Quantity: "200gram",
            Calories: "100cal",
            Protien: "50gram",
            Carbohydrates: "30gram",
            Fat: "150gram",
            Day: "Friday"
        },
        {
            MealType: "Snacks",
            FoodName: "Brown Bread",
            Quantity: "200gram",
            Calories: "100cal",
            Protien: "50gram",
            Carbohydrates: "30gram",
            Fat: "150gram",
            Day: "Friday"
        }
    ]
    return (
        <div className='mealCardContainer'>
            {dailyMeals?.length > 0 && dailyMeals.map((item, index) => {
                return (
                    <div className='mealCard'>
                        <h1 className='meal-header'>
                            {item.MealType}
                        </h1>
                        <div className='mealCardDetails'>
                            <div>
                                <span>Food Name:</span>
                                <span>{item.FoodName}</span>
                            </div>
                            <div>
                                <span>Quantity:</span>
                                <span>{item.Quantity}</span>
                            </div>
                            <div>
                                <span>Calories:</span>
                                <span>{item.Calories}</span>
                            </div>
                            <div>
                                <span>Protien:</span>
                                <span>{item.Protien}</span>
                            </div>
                            <div>
                                <span>Fat:</span>
                                <span>{item.Fat}</span>
                            </div>
                            <div>
                                <span>Day:</span>
                                <span>{item.Day}</span>
                            </div>
                            <div>
                                <label htmlFor="complete">
                                    <input type="radio" id='complete' name='result' style={{backgroundColor:'#333'}}/>
                                    Complete
                                </label>
                                <label htmlFor="unComplete">
                                    <input type="radio" id='unComplete' name='result'/>
                                    UnComplete
                                </label>
                            </div>
                            <div className='saveBtn'>
                                <button>Save</button>
                            </div>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default MealTypes
