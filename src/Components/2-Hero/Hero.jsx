/* eslint-disable react/no-unescaped-entities */
import './Hero.css'
import myphoto from '../../assets/cropped_image.png'
import Lottie from 'lottie-react'
import dev from '../../assets/Animation/developer.json'
const Hero = () => {
    return (
        <section className="hero flex">
            <div className="left-section">
                <div className="parent-avatar flex">
                    <img src={myphoto} className='avatar' alt="" />
                    <div className='icon-verified'></div>
                </div>
                <h1 className='title'>
                    Software designer founder,and amateur astronaut.
                </h1>
                <p className='sub-title'>
                    I'm Nieven Ghasoun,a software designer and 
                    entrepreneur based in Syria-Latakia.I'm the founder 
                    and CEO of planetaria,where we develop 
                    technologies that empower regular people 
                    technologies space on that terms.
                </p>
                <div className="all-icons flex">
                    <div className="icon icon-twitter"></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-linkedin"></div>
                </div>
            </div>
            <div className="right-section animation ">
                <Lottie 
                    className='heroAnimation'
                    animationData={dev} 
                />
            </div>
        </section>
    )
}

export default Hero