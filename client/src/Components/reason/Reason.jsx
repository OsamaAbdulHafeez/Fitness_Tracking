import './reason.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
const Reason = () => {
    return (
        <div className='Reasons' id='reason'>
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>Some Reason</span>
                <div>
                    <span className='stroke-text'>Why</span>
                    <span> Choose us</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={tick} alt="" />
                        <span>Over 40+ Diet Plans</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>You to achieve your health goals and keep you accountable</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>We offer personalized exercise and diet plans based on your fitness level.</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>You can analyze your workout sessions.</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Reason
