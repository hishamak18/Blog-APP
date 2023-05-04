import React from 'react'
import "./Contactform.css"
const Contactform = () => {
  return (
    <div>
        <div className="Contact">
        <form className="Form">
            <label>First Name</label>
            <input type='text' placeholder='Enter your first name..'></input>

            <label>Last Name</label>
            <input type='text' placeholder='Enter your last name..'></input>

            <label>Email</label>
            <input type='text' placeholder='Enter your email adress..'></input>

            <label>Message</label>
            <textarea rows="3" placeholder="Type your Message Here"/>

            <button type="submit" className="btn">send now</button>
        </form>
    </div>
    </div>
  )
}

export default Contactform;