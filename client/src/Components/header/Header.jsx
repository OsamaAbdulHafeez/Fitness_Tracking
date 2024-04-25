import './header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    useEffect(() => {
        const updateInnerWidth = () => {
            setInnerWidth(window.innerWidth);
        };
        updateInnerWidth();
        window.addEventListener('resize', updateInnerWidth);
        return () => {
            window.removeEventListener('resize', updateInnerWidth);
        };
    }, []);
    const [menuOpen, setMenuOpened] = useState(false)
    const [user, setUser] = useState(null)
    const [close, setClose] = useState(false)
    const navigate = useNavigate()
    const menuhandler = () => {
        setMenuOpened(true)
        setClose(true)
    }
    return (
        <div className='header'>
            <img src={Logo} alt="" className='logo' />
            {user && <div className='search'>
                <input type="text" placeholder='Search User' />
                <button>Search</button>
            </div>}
            <div className='search-menu'>
                {innerWidth <= 768 && !menuOpen ? (<div className='burger' style={{ backgroundColor: 'var(--appColor', padding: '0.55rem', borderRadius: '5px' }}>
                    <img src={bars} alt="" className='bars'
                        onClick={menuhandler}
                    />
                </div>) : (
                    <ul className='menu-List'>
                        {innerWidth <= 768 && <li onClick={() => setMenuOpened(false)} className='close'><FontAwesomeIcon icon={faXmark} /></li>}
                        <Link to='/home'><li>Home</li></Link>
                        <Link to='/workout/:id'><li>Workouts</li></Link>
                        <Link to='/nutrition/:id'><li>Nutrition</li></Link>
                        <Link to='/progress/:id'><li>Progress</li></Link>
                        <Link to='/profile/:id'><li>Profile</li></Link>
                    </ul>
                )}

            </div>
        </div>
    )
}

export default Header
