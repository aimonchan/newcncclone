import './Rightbutton.css';
function Rightbutton() {
    return(
        <div className="group-parent">
      <button className="frame-parent">
        <div className="male-user-wrapper">
          <img className="male-user-icon" alt="" src="./public/male-user@2x.png" />
        </div>
        <img className="vector-icon" alt="" src="./public/vector.svg" />
      </button>
      <button className="frame-group">
        <div className="group-item"></div>
        <div className="airbnb-your-home">Airbnb your home</div>
      </button>
      <button className="frame-container">
        <div className="group-inner"></div>
        <img className="geography-icon" alt="" src="./public/geography@2x.png" />
      </button>
    </div>
    );
}

export default Rightbutton;