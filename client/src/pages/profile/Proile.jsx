import OtherHeader from "../../Components/otherHeader/OtherHeader"
import '../../Components/herosection/heroSection.css'
import Footer from "../../Components/footer/Footer"
import PagePortion from "../../Components/pagePortion/PagePortion"
import './profile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons"
import { Select, MenuItem } from '@mui/material';
// Modal
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from "react"
const Profile = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <OtherHeader />
            <PagePortion heading="Profile" />
            <div className="profileContainer">
                <div className="profile-card">
                    <div>
                        <span></span>
                        <FontAwesomeIcon icon={faCameraAlt} />
                    </div>
                    <button className="editPic">Edit Picture</button>
                    <div>
                        <span>First Name:</span>
                        <span>Osama</span>
                    </div>
                    <div>
                        <span>Last Name:</span>
                        <span>Hafeez</span>
                    </div>
                    <div>
                        <span>User Name:</span>
                        <span>OsamaHafeez</span>
                    </div>
                    <div>
                        <span>Email:</span>
                        <span>osamahafeezkhatri@gmail.com</span>
                    </div>
                    <div>
                        <span>Gender:</span>
                        <span>Male</span>
                    </div>
                    <div>
                        <span>Weight:</span>
                        <span>120Kg</span>
                    </div>
                    <div>
                        <span>Body Measurement</span>
                        <span>44"</span>
                    </div>
                    <div>
                        <span>City</span>
                        <span>Karachi</span>
                    </div>
                    <div>
                        <Button className="editProfile" onClick={handleOpen}>Edit Profile</Button>
                    </div>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="boxStyle">
                        <h1>Edit Profile</h1>
                        <form action="">
                            <div>
                                <label htmlFor="" for="firstname">First Name</label>
                                <input type="text" id='firstname' />
                            </div>
                            <div>
                                <label htmlFor="" for="lastname">Last Name</label>
                                <input type="text" id='lastname' />
                            </div>
                            <div>
                                <label htmlFor="" for="username">User Name</label>
                                <input type="text" id='username' />
                            </div>
                            <div>
                                <label htmlFor="" for="email">Email</label>
                                <input type="email" id='email' />
                            </div>
                            <div>
                                <label htmlFor="" for="email">Gender</label>
                                <Select
                                    value={selectedOption}
                                    onChange={handleChange}
                                    displayEmpty
                                    className="genderSelect"
                                    style={{ borderRadius: '8px', margin: '0',color:'var(--orange)',fontWeight:'600' }}
                                >
                                    <MenuItem className="genderItem" value="#" disabled selected>Selected</MenuItem>
                                    <MenuItem className="genderItem" value="Male">Male</MenuItem>
                                    <MenuItem className="genderItem" value="Female">Female</MenuItem>
                                    <MenuItem className="genderItem" value="Other">Other</MenuItem>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="" for="weight">Weight</label>
                                <input type="text" id='weight' />
                            </div>
                            <div>
                                <label htmlFor="" for="bodyM">Body Measurement</label>
                                <input type="text" id='bodyM' />
                            </div>
                            <div>
                                <label htmlFor="" for="City">City</label>
                                <input type="text" id='City' />
                            </div>
                            <div>
                                <button>Save</button>
                            </div>
                        </form>
                    </Box>
                </Modal>
            </div>
            <Footer />
        </>
    )
}

export default Profile
