import './Tabbar.css';
import React, {useState, useRef, useEffect} from 'react';

const buttonWidth=20;
function Tabbar() {
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
    <>
    <div className="multi-carousel">
      <button className="arrow left btn btn-light rounded-pill text-secondary" onClick={() => moveCarousel(trackRef.current, 'left')}>
      <i class="fa-solid fa-angle-left"></i>
      </button>
      <div className="multi-carousel carousel-track mt-1" ref={trackRef} id="myTab" role="tablist">
      
            <button className="btn btn-light active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Popular</button>
            
            
            
            <button className="btn btn-light" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Arts & Culture</button>
            
  
            
            <button className="btn btn-light" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Outdoors</button>
            

            
            <button className="btn btn-light" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Mountains</button>
            
            
            
            <button className="btn btn-light" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
            
  
            
            <button className="btn btn-light" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
            

            
            <button className="btn btn-light" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Beach</button>
            
            
            
            <button className="btn btn-light" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Unique Stays</button>
            
  
            
            <button className="btn btn-light" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Categories</button>
            

            
            <button className="btn btn-light" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Things to do</button>
            

            
            <button className="btn btn-light" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Airbnb friendly apartments</button>
              
      </div>
      <button className="arrow right btn btn-light rounded-pill text-secondary" onClick={() => moveCarousel(trackRef.current, 'right')}>
      <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>

    <div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <div className="row">

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>    

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>  

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>  

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>  

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>  

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>     

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>    

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>  

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>  

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>  

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>  

      <div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
        <div><b>Canmore</b></div>      
        <div>Condo rentals</div>
      </div>           
    </div>
  </div>
  </div>
  
  <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className="row">

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>    

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>     

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>    

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part B</b></div>      
  <div>Condo rentals</div>
</div>           
</div>
</div>
  
  <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className="row">

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>    

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>     

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>    

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>  

<div className='col-sm-6 col-md-3 col-lg-2 mt-4 col-xl-2 col-xxl-2 col-6'>
  <div><b>Part C OK</b></div>      
  <div>Condo rentals</div>
</div>           
</div>
</div>
  </div>
  </div>
 
  </>
  );
}






export default Tabbar;