import React from 'react'
import Contactform from '../../components/ContactForm/Contactform'
import './Contactpage.css'

const Contactpage = () => {
  return (
    <div className='contactpage'>
        <div className='header'>
          <h3>
              Hey, we are still in the Works, but you can send us a message!
          </h3>
        </div>
        <Contactform/>
    </div>
  )
}

export default Contactpage