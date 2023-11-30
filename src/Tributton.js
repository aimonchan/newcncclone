import './Tributton.css';
function Tributton() {
    return(
        <div className="line-parent">
        <div className="frame-child"></div>
        <div className="frame-item"></div>
            <button className="anywhere">Anywhere</button>
            <button className="any-week">Any week</button>
            <button className="add-guests">Add guests</button>
            <button className="ellipse-parent">
                <div className="group-child"></div>
                <i className="fa fa-search text-light search-icon"></i>
            </button>
        </div>
    );
}

export default Tributton;