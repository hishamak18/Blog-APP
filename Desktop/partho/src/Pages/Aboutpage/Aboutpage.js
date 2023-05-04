import React from 'react'
import Aboutbotom from '../../components/AboutBottom/Aboutbotom'
import AboutCenter from '../../components/AboutCenter/AboutCenter'
import AboutTop from '../../components/AboutTop/AboutTop'
import './Aboutpage.css'

const Aboutpage = () => {
  return (
    <div className='aboutpage'>
        <AboutTop/>
        <AboutCenter/>
        <Aboutbotom/>
    </div>
  )
}

export default Aboutpage;