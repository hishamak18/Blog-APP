import React from 'react'
import Card from '../../components/card/Card'
import { CardData } from '../../components/data'
import Form from '../Form/Form'
import './Homecontent.css'

const Homecontent = () => {
  
  return (
    <div className='ContentContainer'>
        <div className='hero'>
            <h1>Something Awesome is coming soon</h1>
            {/* <p>Your all-in-one affiliate marketing tracking software track, automate and optimize your campaings.</p> */}
        </div>
        {/* <div className="cards">
            {CardData.map((card, id) => {
                return(
                <div className="cardscontainer">
                        <Card
                            number={card.number}
                            text={card.text}
                        />
                </div>
                )
            })}
        </div> */}
        {/* <Form/> */}
    </div>
    
  )
}

export default Homecontent;