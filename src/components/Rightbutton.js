import './Rightbutton.css';
function Rightbutton() {
    return(
      <div className='d-flex align-items-center'>
            <button className="btn btn-light rounded-pill border-0">Airbnb your home</button>
            <button className="btn btn-light rounded-pill border-0"><i class="fa-solid fa-globe"></i></button>
            <a type="button" className="btn btn-light bttn rounded-pill d-inline-flex align-items-center justify-content-around border">
            <div><i className="fa-solid fa-bars me-2"></i></div>
            <div><i className="fa-solid fa-user-circle fa-2x text-secondary me-0 ms-2"></i></div>
            </a>
      </div>
    );
}

export default Rightbutton;