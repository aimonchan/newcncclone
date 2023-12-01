import './Rightbutton.css';
function Rightbutton() {
    return(
      <div className="divcontainer">
        <div className="group-parent">
      <button className="frame-parent">
        <div className="male-user-wrapper">
        <i className="fa-solid fa-user male-user-icon d-flex align-items-center justify-content-center"></i>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
        <i className="fa-solid fa-bars vector-icon"></i>
        </div>
      </button>
      <button className="frame-group">
        <div className="group-item"></div>
        <div className="airbnb-your-home">Airbnb your home</div>
      </button>
      <button className="frame-container">
        <div className="group-inner"></div>
        <i className="fa-solid fa-globe geography-icon d-flex align-items-center justify-content-center"></i>
      </button>
    </div>
    </div>
    );
}

export default Rightbutton;