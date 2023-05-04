import React from 'react'
import './Footer.css'
import {FaYoutube, FaFacebook, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socials'>
            <FaYoutube/>
            <FaFacebook/>
            <FaLinkedin/>
            <FaTwitter/>
            <FaInstagram/>
        </div>  
        <div className='footerTerms'>
            <Link to='' className='footerTerm'>Terms of services</Link>
            <Link to='' className='footerTerm'>Privacy policy</Link>
        </div>

        <p className='footerCopy'>Copyright 2023 @ care.partho. All Rights Reserved.</p>
    </div>
  )
}

export default Footer;