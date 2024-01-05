import './Rightbutton.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            
            <button type="button" className="btn btn-light rounded-pill border-0 d-inline-block" data-toggle="modal" data-target="#exampleModalLong"><i className="fa-solid fa-globe"></i></button>
            <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

            
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