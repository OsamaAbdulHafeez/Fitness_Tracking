import OtherHeader from "../../Components/otherHeader/OtherHeader"
import '../../Components/herosection/heroSection.css'
import Footer from "../../Components/footer/Footer"
import PagePortion from "../../Components/pagePortion/PagePortion"
import { Select, MenuItem } from '@mui/material';
import { useState } from "react"
import WorkoutCard from "../../Components/workoutCard/WorkoutCard"
// Modal
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MealTypes from "../../Components/mealTypes/MealTypes";

const NutritionDetails = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <OtherHeader/>
            <PagePortion heading="Workouts" />
            <div className="searchAndButtons">
                <Button style={{ color: 'white', fontWeight: 'bold' }} className="addWorkout" onClick={handleOpen}>Add Food Intake</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="boxStyle">
                        <h1>Add Food Intake</h1>
                        <form action="">
                            <div>
                                <label htmlFor="" for="exerciseName">Food Item</label>
                                <input type="text" id="exerciseName" />
                            </div>
                            <div>
                                <label htmlFor="" for="exerciseName">Quantity</label>
                                <input type="text" id="exerciseName" />
                            </div>
                            <div>
                                <label htmlFor="" for="exerciseName">Calories</label>
                                <input type="text" id="exerciseName" />
                            </div>
                            <div>
                                <label htmlFor="" for="exerciseName">Protein</label>
                                <input type="text" id="exerciseName" />
                            </div>
                            <div>
                                <label htmlFor="" for="exerciseName">Carbohydrates</label>
                                <input type="text" id="exerciseName" />
                            </div>
                            <div>
                                <label htmlFor="" for="exerciseName">Fats</label>
                                <input type="text" id="exerciseName" />
                            </div>
                            <div>
                                <label htmlFor="" for="exerciseName">Meals Category</label>
                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    displayEmpty
                                    fullWidth
                                    className="categorySelect"
                                >
                                    <MenuItem className="categoryItems" value="" disabled selected>Selected</MenuItem>
                                    <MenuItem className="categoryItems" value="BreakFast">BreakFast</MenuItem>
                                    <MenuItem className="categoryItems" value="Lunch">Lunch</MenuItem>
                                    <MenuItem className="categoryItems" value="Dinner">Dinner</MenuItem>
                                    <MenuItem className="categoryItems" value="Snacks">Snacks</MenuItem>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="" for="exerciseName">Selected Category</label>
                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    displayEmpty
                                    fullWidth
                                    className="categorySelect"
                                >
                                    <MenuItem className="categoryItems" value="" disabled selected>Selected</MenuItem>
                                    <MenuItem className="categoryItems" value="Monday">Monday</MenuItem>
                                    <MenuItem className="categoryItems" value="Tuesday">Tuesday</MenuItem>
                                    <MenuItem className="categoryItems" value="Wednesday">Wednesday</MenuItem>
                                    <MenuItem className="categoryItems" value="Thursday">Thursday</MenuItem>
                                    <MenuItem className="categoryItems" value="Friday">Friday</MenuItem>
                                    <MenuItem className="categoryItems" value="Saturday">Saturday</MenuItem>
                                    <MenuItem className="categoryItems" value="Sunday">Sunday</MenuItem>
                                </Select>
                            </div>
                            <div>
                                <button onClick={handleClose}>Cancel</button>
                                <button>Save</button>
                            </div>
                        </form>
                    </Box>
                </Modal>
            </div>
            <MealTypes/>
            <Footer />
        </>
    )
}

export default NutritionDetails

