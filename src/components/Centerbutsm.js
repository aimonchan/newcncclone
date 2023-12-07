import './Centerbutsm.css';
function Centerbutsm(){
    return(
    <div className="bttn pt-2 pb-2 d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none d-flex align-items-center justify-content-center w-100">
        <button className="btn rounded-pill border w-75 text-start d-inline-flex align-items-center">
        <i className="fa fa-search text-dark "></i>
        <div className="ms-3">
            <div style={{'fontSize':'12px','fontWeight':'bold'}}>Anywhere</div>
            <div style={{'fontSize':'10px'}}>Anyweek. Add guests</div>
        </div>
        </button>
        <button className="d.inline btn border rounded-pill ms-1" style={{'width':'49px','height':'49px'}}>
        <i class="fa-solid fa-sliders"></i>
        </button>
    </div>
    );
}

export default Centerbutsm;