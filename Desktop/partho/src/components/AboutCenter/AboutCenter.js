import React from 'react'
import './AboutCenter.css'

const AboutCenter = () => {
  return (
    <div className='aboutCenter'>
        <div className='aboutCenterheader'>
            <h3>Metricks was developed because just like you, we needed a product that could give us good value.</h3>
        </div>
        <div className='aboutCentergrid'>
            <div className='gridLeft'>
                <div>
                    <h3  className='title'><span>01</span>
                    WHY US ?</h3>

                    <p>We pride ourselves in our ability to innovate and create world-class tools that provide reliable and
                        efficient touchpoints between advertisers and affiliates.
                    </p>
                    
                    <img src='' alt=''/>
                </div>
                
            </div>

            <div className='gridRight'>
                <div>
                    <h3 className='title'><span>02</span>
                    Growing with you.</h3>

                    <p>Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software,
                         a genius tool to help you track, automate and optimize your influencer campaigns, 
                         all from one dashboard.
                    </p>
                    <p>Our team of experts are constantly brainstorming, testing and developing new solutions with only 
                    one thing in mind - your business growth. Your success is our success and by giving you
                    the tools you need to scale, we grow as well.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCenter