import '../../Components/herosection/heroSection.css'
import { motion } from 'framer-motion'
import Heart from '../../assets/heart.png'
import './pagePortion.css'
const PagePortion = ({heading}) => {
    const mobile = window.innerWidth <= 768 ? true : false
    const transition = { type: 'spring', duration: 3 }
    return (
        <div className='portion-main'>
            <div className="the-best-ad best-pp">
                <motion.div
                    initial={{ left: mobile ? '170px' : '238px' }}
                    whileInView={{ left: '8px' }}
                    transition={{ ...transition, type: 'tween' }}
                >
                </motion.div>
                <span>The best fitness tracking app</span>
            </div>
            <h1 className="stroke-text progress-heading">{heading}</h1>
            <div>
            <motion.div
                initial={{ right: '-1rem' }}
                whileInView={{ right: '4rem' }}
                transition={transition}
                className="heart-rate heart-pp"
                >
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span>116 bpm</span>
            </motion.div>
            </div>
        </div>
    )
}

export default PagePortion
