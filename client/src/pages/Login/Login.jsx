import { Link } from 'react-router-dom'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
    return (
        <div className='SignupContainer loginContainer'>
            <div className='Signupform' style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
                
                <h1 className='form-Heading'>
                    Login
                </h1>
                <form action="">
                    <div>
                        <label htmlFor="" for="email">Email</label>
                        <input type="email" id='email' style={{width:'220px'}}/>
                    </div>
                    <div>
                        <label htmlFor="" for="password">Password</label>
                        <input type="text" id='password' style={{width:'220px'}}/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
                <Link to='/signup'>Don't Have an Account</Link>
            </div>
        </div>
    )
}

export default Login
