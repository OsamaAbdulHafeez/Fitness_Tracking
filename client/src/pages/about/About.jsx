import '../../Components/herosection/heroSection.css'
import './about.css'
import hero_image from '../../assets/hero_image.png'
import image1 from '../../assets/image1.png'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { mobilecontext } from '../../App'
import Footer from '../../Components/footer/Footer'
import Header from '../../Components/header/Header'
import Reason from '../../Components/reason/Reason'
import Program from '../../Components/program/Program'
const About = () => {
    const { innerWidth } = useContext(mobilecontext)
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false
    return (
        <>
            <div className='hero'>
                <div className="blur hero-blur"></div>
                <div className="left-h">
                    <Header />
                </div>
                <div
                    style={{ background: 'none' }}
                    className="right-h">
                    <button
                        style={{ backgroundColor: 'var(--orange)', top: '2.5rem', color: 'white' }}
                        className='btn'>Join Now</button>

                </div>
            </div>
            <Program/>
            <Footer />
        </>
    )
}

export default About

