import './Demo.css';
function Demo(){
    return(
        <div className="bg-light">
            <div className="center divheight">
                <div className="btn-group" role="group" aria-label="Basic example">
                    
                <div className='dropdown'>
                    <button className="btn dropdown-toggle" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Stays
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div> 

                    <a className="btn">Experiences</a>
                    <a className="btn">Online Experiences</a>

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div class="dropdown-menu" role='menu' aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid center divheight ps-5 pe-5 whiteback">
                <div className="btn-group bg-lightgray rounded-pill w-100 mainmargin shadow-sm" role="group" aria-label="Basic example">
                    <a className="btn bg-light rounded-pill border w-30 ps-3 pe-3">
                        <div className="text-start">Where</div>
                        <input type className="form-control form-control-sm no-border focus-ring focus-ring-light" placeholder="Search Destinations"></input>
                    </a>

                    <div className='dropdown w-15'>
                        <button className="btn bg-light rounded-pill text-start ps-3 pe-3 border dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button" id="dropdownMenuLink">
                            <div><label>Check in</label></div>
                            <div className="text-muted">Add dates</div>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>                    
                    
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
            </div>
            
        </div>
    );
}

export default Demo;