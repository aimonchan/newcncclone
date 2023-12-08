import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Carouselbut(){
    const settings = {
        dots: false,
        infinite: false,
        speed: 120,
        slidesToShow: 7,
        slidesToScroll: 2,
        lazyLoad:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#6c757d",'borderRadius':'50%','textShadow':'none'}}
            onClick={onClick}
            >
            <FontAwesomeIcon icon={faChevronRight}/>
            </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className+ " fas fa-chevron-right"}
            style={{ ...style, display: "block", background: "#6c757d",'borderRadius':'50%'}}
            onClick={onClick}
            >
            <FontAwesomeIcon icon={faChevronLeft}/>
            </div>
        
        );
      }
 
    return(
        <div className="ms-4 mt-3 mb-3 ps-5 pe-5">
          <Slider {...settings}>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
            <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
          </Slider>
        </div>
    );
}

export default Carouselbut;