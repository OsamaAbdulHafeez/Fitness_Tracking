import './footer.css'
import instagram from '../../assets/instagram.png'
import facebok from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import Logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className='footer-container'>
            <hr />
            <div className="footer">
                <div className='social-links'>
                    <img src={instagram} alt="" />
                    <img src={facebok} alt="" />
                    <img src={twitter} alt="" />
                </div>
                <div className='logo-f'>
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer
