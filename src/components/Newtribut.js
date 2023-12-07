function Newtribut(){
    return(
        <div class="btn-group btn-group-md border rounded-pill" role="group">
            <button type="button" class="btn">Anywhere</button>
            <div className="d-flex align-items-center">|</div>
            <button type="button" class="btn">Anyweek</button>
            <div className="d-flex align-items-center">|</div>
            <button type="button" class="btn">Add Guests</button>
            <div className="d-flex align-items-center me-2">
            <button type="button" class="btn btn-danger rounded-pill" style={{'width':'30px','height':'30px'}}>
            <i class="fa-solid fa-magnifying-glass d-flex align-items-center justify-content-center"></i>
            </button>
            </div>
        </div>
    );
}

export default Newtribut;