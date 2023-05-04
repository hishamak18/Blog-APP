import React from 'react'
import Background from '../components/Background/Background';
import Homepage from '../Pages/Homepage/Homepage';


const Home = () => {
  return (
    <div className='container2'>
        <Background/>
        <div className='homeContainer'>
          <div className='content'>
            <Homepage/>
          </div> 
        </div>
    </div>
  )
}

export default Home;