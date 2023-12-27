import './Subbut.css';
function Subbut(){
    return(
        <div className="container-fluid center divheight ps-5 pe-5 whiteback">
                <div className="btn-group bg-lightgray rounded-pill w-100 mainmargin shadow-sm" role="group" aria-label="Basic example">
                    <a className="btn bg-light rounded-pill border w-30 ps-3 pe-3">                       <div className="text-start">Where</div>
                        <input type className="form-control form-control-sm no-border focus-ring focus-ring-light" placeholder="Search Destinations"></input>
                    </a>

                    
                    <a className="btn bg-light rounded-pill text-start ps-3 pe-3 border">
                            <div><label>Check in</label></div>
                            <div className="text-muted">Add dates</div>
                    </a>
                    <a className="btn bg-light rounded-pill w-15 text-start ps-3 pe-3 border">
                        <div>Check out</div>
                        <div className="text-muted">Add dates</div>
                    </a>
                    <a className="row btn bg-light rounded-pill w-30 ps-3 pe-3 border d-flex">
                        <div className="col text-start d-inline-block">
                            <div>Who</div>
                            <div className="text-muted">Add Guests</div>
                        </div>
                        <div className='col d-flex align-items-center justify-content-end'>
                            <button className="btn btn-danger rounded-pill ms-auto me-0">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <span className='ms-1'>Search</span>
                            </button>
                        </div>
                    </a>
                </div>

                <div className="container-fluid bg-none center dropdown-content heightauto d-flex justify-content-center h-50">
                <div className="worldmap">Hello</div>
                <div className="worldmapB">worldmapB</div>
                <div className="worldmapC">worldmapC</div>
            </div>
            </div>

    );
}

export default Subbut;