import './Showmapbut.css';
function Showmapbut() {
    return(
        <div>
            <button type="button" className="btn btn-dark btn-lg rounded-pill">
                Show Map
                <span className="ms-2"><i class="fa-solid fa-map"></i></span>            
            </button>
        </div>
    );
}

export default Showmapbut;