import React ,{ useState } from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import './Aboutbottom.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Contactpage from '../../Pages/ContactPage/Contactpage';

const Aboutbotom = () => {
  const toggleShow = () => setShow((s) => !s);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div className='Aboutbottom'>
        <div className='bottombgd'>
            <div className='bottombgdImg'>
            </div>
        </div>
        <div className='bottomlayer'>
            <h3>Got a Question?</h3>

            <p>See how Metricks can help your business grow with best Affiliate Marketing Tracking Software.</p>
            
            <Link to='' onClick={toggleShow} className='link'>Contact Us <FaArrowRight/></Link>
            <>
            <Offcanvas show={show} onHide={handleClose} scroll='true' 
              backdrop='true' placement='end'className='offcanvas text-light'>
              <Offcanvas.Header >
                <div className='closeButton' onClick={toggleShow}>
                  <FaArrowRight className='arrow'/>
                </div>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
               <Contactpage/>
              </Offcanvas.Body>
            </Offcanvas>
            </>
        </div>
       
    </div>
  )
}

export default Aboutbotom