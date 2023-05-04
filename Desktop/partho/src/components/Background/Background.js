import React from 'react'
import './Background.css'

import BgImg1 from '../../Assets/Ellipse 1.svg'
import BgImg2 from '../../Assets/Ellipse 2.svg'


const Background = () => {
  return (
    <div className='homebackground'>
      <div className='bgImg1'>
        <img src={BgImg1}  alt=''/>
      </div>
       
       <div className='bgImg2'>
        <img src={BgImg2}   alt=''/>
       </div>
       
       
       
    </div>
  )
}

export default Background;