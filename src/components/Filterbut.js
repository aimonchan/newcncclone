function Filterbut(){
    return(
        <div className="w-100 d-none d-sm-none d-md-inline-flex d-lg-inline-flex d-xl-inline-flex d-xxl-inline-flex align-items-center justify-content-center">
          <button type="button" className="d-inline-block btn border rounded text-dark align-items-center justify-content-center text-truncate">
            <span><i className="fa fa-bars"></i></span>
            Filters
          </button>
          <button type="button" className="d-inline-block w-50 btn border rounded text-dark ms-2 align-items-center justify-content-center text-truncate">
            Display Total before Taxes
          <span><i className="fa-solid fa-toggle-on fa-2xl"></i></span>
          </button>
        </div>
    );
}

export default Filterbut;