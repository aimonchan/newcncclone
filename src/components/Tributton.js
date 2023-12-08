import './Tributton.css';
function Tributton() {
    return(
        <div class="bttn btn-group btn-group-md border rounded-pill" role="group">
            <button type="button" className="btn text-truncate">Anywhere</button>
            <div className="d-flex align-items-center text-secondary text-muted">|</div>
            <button type="button" className="btn text-truncate">Anyweek</button>
            <div className="d-flex align-items-center text-secondary text-muted">|</div>
            <button type="button" className="btn text-truncate">Add Guests</button>
            <div className="d-flex align-items-center me-2">
            <button type="button" className="btn btn-danger rounded-pill" style={{'width':'30px','height':'30px'}}>
            <i className="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center"></i>
            </button>
            </div>
        </div>
    );
}

export default Tributton;