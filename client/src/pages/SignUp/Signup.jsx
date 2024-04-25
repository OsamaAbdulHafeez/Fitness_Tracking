import { Link } from 'react-router-dom'
import './signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { AuthContext } from '../../context/authContext';
const Signup = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className='SignupContainer'>
            <div className='Signupform'>
                <h1 className='form-Heading'>
                    SignUp
                </h1>
                <form action="">
                    <span></span>
                    <div>
                        <label htmlFor="" for="picture">
                            <FontAwesomeIcon icon={faCamera} className='icon' />
                        </label>
                        <input type="file" id='picture' style={{ display: 'none' }} />
                    </div>
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
                        <label htmlFor="" for="password">Password</label>
                        <input type="text" id='password' />
                    </div>
                    <div>
                        <label htmlFor="" for="confirmpassword">Confirm Password</label>
                        <input type="text" id='confirmpassword' />
                    </div>
                    <div>
                        <label htmlFor="" for="email">Gender</label>
                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            displayEmpty
                            className="genderSelect"
                            style={{
                                borderRadius: '10px', margin: '0', color: 'var(--orange)', fontWeight: '600',
                                width: "197px", height: '37px'
                            }}
                        >
                            <MenuItem className="genderItem" value="#" disabled selected>Selected</MenuItem>
                            <MenuItem className="genderItem" value="Male">Male</MenuItem>
                            <MenuItem className="genderItem" value="Female">Female</MenuItem>
                            <MenuItem className="genderItem" value="Other">Other</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <button>Signup</button>
                    </div>
                </form>
                <Link to='/'>Already Have an Account</Link>
            </div>
        </div>
    )
}

export default Signup
