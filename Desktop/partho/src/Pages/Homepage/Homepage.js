import React from 'react'
import Footer from '../../components/Footer/Footer';
import Homecontent from '../../components/Homecontent/Homecontent';
import BgImg3 from '../../Assets/Ellipse 3.svg'
import './Homepage.css'



const Homepage = () => {
  return (
    <div className='container2'>
          <Homecontent/>
          <div className='footer-container'>
              <img src={BgImg3} className='bgImg3'  alt=''/>
            <div className='Footer'>
              <Footer/>
            </div>
          </div>
    </div>
  )
}

export default Homepage;