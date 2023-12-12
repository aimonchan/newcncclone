import './AMCarousel.css';
import React, {useState, useRef, useEffect} from 'react';

const buttonWidth=20;
function Testing() {
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
      <button className="arrow left btn btn-light rounded-pill shadow text-secondary" onClick={() => moveCarousel(trackRef.current, 'left')}>
      <i class="fa-solid fa-angle-left"></i>
      </button>
      <div className="carousel-track mt-1" ref={trackRef}>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
            <button>Button 4</button>
            <button>Button 5</button>
            <button>Button 6</button>
            <button>Button 7</button>
            <button>Button 8</button>
            <button>Button 9</button>
            <button>Button 10</button>
            <button>Button 11</button>
            <button>Button 12</button>
            <button>Button 13</button>
            <button>Button 14</button>
            <button>Button 15</button>
            <button>Button 16</button>
            <button>Button 17</button>
            <button>Button 18</button>       
      </div>
      <button className="arrow right btn btn-light rounded-pill text-secondary" onClick={() => moveCarousel(trackRef.current, 'right')}>
      <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}


export default Testing;