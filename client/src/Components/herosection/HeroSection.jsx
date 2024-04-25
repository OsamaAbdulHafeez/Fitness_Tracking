import Header from '../header/Header'
import './heroSection.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { mobilecontext } from '../../App'
import { Link } from 'react-router-dom'
const HeroSection = () => {
    const { innerWidth } = useContext(mobilecontext)
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false
    return (
        <div className='hero'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '170px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    >
                    </motion.div>
                    <span>The best fitness tracking app</span>
                </div>
                <div className="hero-text">
                    <div><span className='stroke-text'>Shape </span><span>Your</span>
                    </div>
                    <div><span>Ideal Body</span></div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullset</span>
                    </div>
                </div>
                {/* Figures */}

                <div className='figures'>
                    <div>
                        <span>+40</span>
                        <span>Diet Plans</span>
                    </div>
                    <div>
                        <span>+500</span>
                        <span>users join</span>
                    </div>
                    <div>
                        <span>+20</span>
                        <span>Fitness Program</span>
                    </div>
                </div>
                {/* Hero Buttons */}
                <div className="hero-buttons">
                    <div className="btn">Get Started</div>
                    <div className="btn">Learn More</div>
                </div>
            </div>
            <div className="right-h">
                <Link className='btn' to='/signup'><button>Join Now</button></Link>
                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </motion.div>
                <motion.img src={hero_image} alt="" className='hero_image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt="" className='hero_image_back' />
                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: innerWidth <= 1080 && innerWidth >= 993 ? '23rem' : innerWidth <= 992 ? '9rem' : '28rem' }}
                    transition={transition}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default HeroSection
