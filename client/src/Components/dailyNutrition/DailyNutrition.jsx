import './dailyNutrition.css'
import tick from '../../assets/tick.png'
import { Link } from 'react-router-dom'
const DailyNutrition = () => {
  const Days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ]
  // const Week = [
  //   {
  //     WeekNum: 'Week 1',
  //     Day1: "Monday",
  //     Day2: "Tuesday",
  //     Day3: "Wednesday",
  //     Day4: "Thursday",
  //     Day5: "Friday",
  //     Day6: "Saturday",
  //     Day7: "Sunday"
  //   },
  //   {
  //     WeekNum: 'Week 2',
  //     Day1: "Monday",
  //     Day2: "Tuesday",
  //     Day3: "Wednesday",
  //     Day4: "Thursday",
  //     Day5: "Friday",
  //     Day6: "Saturday",
  //     Day7: "Sunday"
  //   },
  //   {
  //     WeekNum: 'Week 3',
  //     Day1: "Monday",
  //     Day2: "Tuesday",
  //     Day3: "Wednesday",
  //     Day4: "Thursday",
  //     Day5: "Friday",
  //     Day6: "Saturday",
  //     Day7: "Sunday"
  //   },
  //   {
  //     WeekNum: 'Week 4',
  //     Day1: "Monday",
  //     Day2: "Tuesday",
  //     Day3: "Wednesday",
  //     Day4: "Thursday",
  //     Day5: "Friday",
  //     Day6: "Saturday",
  //     Day7: "Sunday"
  //   }
  // ]
  const Week = [
    {
      DayName: 'Monday',
      BreakFast: "BreakFast",
      Lunch: "Lunch",
      Dinner: "Dinner",
      Snacks: "Snacks",
    },
    {
      DayName: 'Tuesday',
      BreakFast: "BreakFast",
      Lunch: "Lunch",
      Dinner: "Dinner",
      Snacks: "Snacks",
    },
    {
      DayName: 'Wednesday',
      BreakFast: "BreakFast",
      Lunch: "Lunch",
      Dinner: "Dinner",
      Snacks: "Snacks",
    },
    {
      DayName: 'Thursday',
      BreakFast: "BreakFast",
      Lunch: "Lunch",
      Dinner: "Dinner",
      Snacks: "Snacks",
    },
    {
      DayName: 'Friday',
      BreakFast: "BreakFast",
      Lunch: "Lunch",
      Dinner: "Dinner",
      Snacks: "Snacks",
    },
    {
      DayName: 'Saturday',
      BreakFast: "BreakFast",
      Lunch: "Lunch",
      Dinner: "Dinner",
      Snacks: "Snacks",
    },
    {
      DayName: 'Sunday',
      BreakFast: "BreakFast",
      Lunch: "Lunch",
      Dinner: "Dinner",
      Snacks: "Snacks",
    },
  ]
  return (
    <div className='DailyNutritionContainer'>
      {Week?.length > 0 && Week.map((item, index) => {
        return (
          <div className='DailyNutrition-card'>
            <h1 className='exercise-header'>
              {item.DayName}
            </h1>
            <div className='DailyNutritionDetails'>
              <div>
                <img src={tick} alt="" />
                <span>{item.BreakFast}</span>
              </div>
              <div>
                <img src={tick} alt="" />
                <span>{item.Lunch}</span>
              </div>
              <div>
                <img src={tick} alt="" />
                <span>{item.Dinner}</span>
              </div>
              <div>
                <img src={tick} alt="" />
                <span>{item.Snacks}</span>
              </div>
              <Link to='/nutrition-details/:day/:id'><button>Complete Details</button></Link>
            </div>

          </div>
        )
      })}

    </div>
  )
}

export default DailyNutrition
