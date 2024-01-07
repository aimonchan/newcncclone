import './Rightbutton.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Globeicon from './Globeicon';
import React, {useState} from 'react';
function Rightbutton() {

  const[isPopup,setPopup]=useState(false);
  const handlePopup=()=>{
    setPopup(!isPopup);
  }
    return(
      <>
      <div className='d-inline-flex align-items-center text-truncate me-5'>
            <button className="btn btn-light rounded-pill border-0">Airbnb your home</button>
            
            {/* <button type="button" className="btn btn-light rounded-pill border-0 d-inline-block" data-toggle="modal" data-target="#exampleModalLong"><i className="fa-solid fa-globe"></i></button> */}
            <Globeicon/>

                        
            <a type="button" className="btn btn-light bttn rounded-pill d-inline-flex align-items-center justify-content-around border userbut" onClick={handlePopup}>
            <div><i className="fa-solid fa-bars me-2"></i></div>
            <div><i className="fa-solid fa-user-circle fa-2x text-secondary me-0 ms-2"></i></div>
            </a>
      </div>
      <div className="popup" style={{display: isPopup? 'block': 'none'}}>
        Hello
      </div>
      </>
    );
}

export default Rightbutton;