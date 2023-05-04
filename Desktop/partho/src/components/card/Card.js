import React from 'react'
import './Card.css'

const Card= (props) => {
  return (
    <div className='card'>
        <h2>{props.number}</h2>
        <p>{props.text}</p>
    </div>
  )
}

export default  Card;
