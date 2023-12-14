import './Demo.css';
function Demo(){
    return(
        <div className="bg-primary">
            <div className="center divheight">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <a className="btn">Stays</a>
                    <a className="btn">Experiences</a>
                    <a className="btn">Online Experiences</a>
                </div>
            </div>

            <div className="container-fluid center divheight ps-5 pe-5">
                <div className="btn-group rounded-pill w-100" role="group" aria-label="Basic example">
                    <a className="btn rounded-pill border w-75 ps-3 pe-3">
                        <div className="text-start">Where</div>
                        <input type className="form-control form-control-sm no-border" placeholder="Search Destinations"></input>
                    </a>
                    <a className="btn rounded-pill w-75 text-start ps-3 pe-3 border">
                        <div>Check in</div>
                        <div className="text-muted">Add dates</div>
                    </a>
                    <a className="btn rounded-pill w-75 text-start ps-3 pe-3 border">
                        <div>Check out</div>
                        <div className="text-muted">Add dates</div>
                    </a>
                    <a className="btn rounded-pill w-75 d-flex align-items-center ps-3 pe-3 border">
                        <div className="text-start w-50">
                            <div>Who</div>
                            <div className="text-muted">Add Guests</div>
                        </div>
                        <div>
                            <a className="btn rounded-pill w-50">Search</a>
                        </div>
                    </a>
                    
                </div>
            </div>
            
        </div>
    );
}

export default Demo;