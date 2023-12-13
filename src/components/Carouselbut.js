import './Carouselbut.css';
import React, {useState, useRef, useEffect} from 'react';

const buttonWidth=20;
function Carouselbut() {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);

  const moveCarousel = (track, direction) => {
    const newPosition = position + (direction === 'left' ? -3 : 3);
    setPosition(newPosition);

    track.scrollTo({ left: newPosition * buttonWidth, behavior: 'smooth' });
    // setPosition(0);
  };

  useEffect(() => {
    const track = trackRef.current;
    const arrowButtons = document.querySelectorAll('.arrow');

    arrowButtons.forEach(button => {
      button.addEventListener('click', () => {
        const direction = button.classList.contains('left') ? 'left' : 'right';
        setPosition(prevState => prevState + (direction === 'left' ? -1 : 1));
      track.scrollTo({ left: position * buttonWidth, behavior: 'smooth' });
        // moveCarousel(track, direction);
      });
    });

    return () => {
      arrowButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="multi-carousel">
      <button className="arrow left btn btn-light rounded-pill text-secondary" onClick={() => moveCarousel(trackRef.current, 'left')}>
      <i class="fa-solid fa-angle-left"></i>
      </button>
      <div className="carousel-track mt-1" ref={trackRef}>
            <button className='btn'>Button 1</button>
            <button className='btn'>Button 2</button>
            <button className='btn'>Button 3</button>
            <button className='btn'>Button 4</button>
            <button className='btn'>Button 5</button>
            <button className='btn'>Button 6</button>
            <button className='btn'>Button 7</button>
            <button className='btn'>Button 8</button>
            <button className='btn'>Button 9</button>
            <button className='btn'>Button 10</button>
            <button className='btn'>Button 11</button>
            <button className='btn'>Button 12</button>
            <button className='btn'>Button 13</button>
            <button className='btn'>Button 14</button>
            <button className='btn'>Button 15</button>
            <button className='btn'>Button 16</button>
            <button className='btn'>Button 17</button>
            <button className='btn'>Button 18</button>       
      </div>
      <button className="arrow right btn btn-light rounded-pill text-secondary" onClick={() => moveCarousel(trackRef.current, 'right')}>
      <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}
export default Carouselbut;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import "../../node_modules/slick-carousel/slick/slick.css";
// import "../../node_modules/slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// function Carouselbut(){
//     const settings = {
//         dots: false,
//         infinite: false,
//         speed: 120,
//         slidesToShow: 7,
//         slidesToScroll: 2,
//         lazyLoad:true,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 6,
//               slidesToScroll: 3,
//               infinite: false,
//               dots: false
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 4,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1
//             }
//           }
//         ]
      
//       };

//       function SampleNextArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//           <div
//             className={className}
//             style={{ ...style, display: "block", background: "#6c757d",'borderRadius':'50%','textShadow':'none'}}
//             onClick={onClick}
//             >
//             <FontAwesomeIcon icon={faChevronRight}/>
//             </div>
//         );
//       }
      
//       function SamplePrevArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//           <div
//             className={className+ " fas fa-chevron-right"}
//             style={{ ...style, display: "block", background: "#6c757d",'borderRadius':'50%'}}
//             onClick={onClick}
//             >
//             <FontAwesomeIcon icon={faChevronLeft}/>
//             </div>
        
//         );
//       }
 
//     return(
//         <div className="ms-4 mt-3 mb-3 ps-5 pe-5">
//           <Slider {...settings}>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//             <button type="button" class="btn btn-outline"><i class="fa-solid fa-star text-secondary"></i><br></br>Primary</button>
//           </Slider>
//         </div>
//     );
// }

// export default Carouselbut;