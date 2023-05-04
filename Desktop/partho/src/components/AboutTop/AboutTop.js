import React from 'react'
import './AboutTop.css'
import BgImg2 from '../../Assets/Ellipse 2.svg'
import {FaMinus} from 'react-icons/fa'

const AboutTop = () => {
  return (
    <div className='AboutTop'>
       <div className='topBackground'>
            <div className='topimg'></div>
       </div>
       <div className='toplayer'>
            <div className='topLeft'>
                <p> <span className='dash'><FaMinus/><FaMinus/></span> About us</p>
                <div className='top-header'>
                    <h3>Built for Saas 
                    <br/> and E-commerce</h3>
                </div>
            </div>
            <div className='topright'>
                <div className='rightimg'>
                    <img src={BgImg2}   alt=''/>
                </div>
                <div className='rightText'>
                    <p>Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default AboutTop;