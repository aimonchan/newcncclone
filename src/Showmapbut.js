import './Showmapbut.css';
function Showmapbut() {
    return(
        <div className="d-flex align-items-center justify-content-center">
            <button type="button" class="btn btn-dark btn-lg rounded-pill">
                Show Map
                <span className="ms-2"><i class="fa-solid fa-map"></i></span>            
            </button>
        </div>
    );
}

export default Showmapbut;