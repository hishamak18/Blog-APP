import React from 'react'
import './Form.css'


const Form = () => {
 
  return (
    <div className='formContainer'>
        <form className="form">
            <div className="details">
                    <input type='text' placeholder='First Name'></input>

                    <input type='text' placeholder='Last Name'></input>
            </div>
            
            <div className="email">
                <input type='text' placeholder='Enter your email adress..'></input>

                <button type="submit" className="btn">join Our waiting list</button>
            </div>
            
        </form>
    </div>
  )
}

export default Form;