import OtherHeader from "../../Components/otherHeader/OtherHeader"
import '../../Components/herosection/heroSection.css'
import Footer from "../../Components/footer/Footer"
import './workout.css'
import PagePortion from "../../Components/pagePortion/PagePortion"
import { Select, MenuItem } from '@mui/material';
import { useState } from "react"
import WorkoutCard from "../../Components/workoutCard/WorkoutCard"
// Modal
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
const Workout = () => {
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
                <div className='search searchworkout'>
                    <input type="text" placeholder='Search Workouts' />
                    <button>Search</button>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div className="btns">
                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            displayEmpty
                            fullWidth
                            className="menuSelect"
                        >
                            <MenuItem className="menuItems" value="" selected>ALL</MenuItem>
                            <MenuItem className="menuItems" value="CARDIO">CARDIO</MenuItem>
                            <MenuItem className="menuItems" value="STRENGTH">STRENGTH</MenuItem>
                            <MenuItem className="menuItems" value="BALANCE">BALANCE</MenuItem>
                            <MenuItem className="menuItems" value="BALANCE">FLEXIBILITY</MenuItem>
                            <MenuItem className="menuItems" value="BALANCE">ENDURANCE</MenuItem>
                        </Select>
                    </div>
                    <Button style={{ color: 'white', fontWeight: 'bold' }} className="addWorkout" onClick={handleOpen}>Add Workout</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className="boxStyle">
                            <h1>Add Workout</h1>
                            <form action="">
                                <div>
                                    <label htmlFor="" for="exerciseName">Exercise Name</label>
                                    <input type="text" id="exerciseName" />
                                </div>
                                <div>
                                    <label htmlFor="" for="exerciseName">Sets</label>
                                    <input type="text" id="exerciseName" />
                                </div>
                                <div>
                                    <label htmlFor="" for="exerciseName">Repts</label>
                                    <input type="text" id="exerciseName" />
                                </div>
                                <div>
                                    <label htmlFor="" for="exerciseName">Weight</label>
                                    <input type="text" id="exerciseName" />
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
                                        <MenuItem className="menuItems" value="CARDIO">CARDIO</MenuItem>
                                        <MenuItem className="menuItems" value="STRENGTH">STRENGTH</MenuItem>
                                        <MenuItem className="menuItems" value="BALANCE">BALANCE</MenuItem>
                                        <MenuItem className="menuItems" value="BALANCE">FLEXIBILITY</MenuItem>
                                        <MenuItem className="menuItems" value="BALANCE">ENDURANCE</MenuItem>
                                    </Select>
                                </div>
                                <div>
                                    <label htmlFor="" for="exerciseName">Notes</label>
                                    <textarea name="" id="" cols="22" rows="5"></textarea>
                                </div>
                                <div>
                                    <button onClick={handleClose}>Cancel</button>
                                    <button>Save</button>
                                </div>
                            </form>
                        </Box>
                    </Modal>
                </div>
            </div>
            <WorkoutCard />
            <Footer />
        </>
    )
}

export default Workout
