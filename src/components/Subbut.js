import './Subbut.css';
import React, {useState,useRef,useEffect} from 'react';
function Subbut(props){

     const {onTogglebut}= props;

    const [isWherebuttoggled,setWherebuttoggled]= useState(false);
    const handleWherebut=()=>{
        setWherebuttoggled(!isWherebuttoggled);
        setCheckinbut(false);
        setCheckoutbut(false);
        setAddguestbut(false);
    }

    const [isCheckinbut,setCheckinbut]=useState(false);
    const handleCheckinbut=()=>{
        setCheckinbut(!isCheckinbut);
        setCheckoutbut(false);
        setWherebuttoggled(false);
        setAddguestbut(false);
    }

    const [isCheckoutbut,setCheckoutbut]=useState(false);
    const handleCheckoutbut=()=>{
        setCheckoutbut(!isCheckoutbut);
        setCheckinbut(false);
        setWherebuttoggled(false);
        setAddguestbut(false);
    }

    const [isAddguestbut,setAddguestbut]=useState(false);
    const handleAddguestbut=()=>{
        setAddguestbut(!isAddguestbut);
        setCheckoutbut(false);
        setCheckinbut(false);
        setWherebuttoggled(false);
    }

    const butRef= useRef(null);

    useEffect(()=>{
        const handleClickOutside=(event)=>{
            if(butRef.current && !butRef.current.contains(event.target)){
                setCheckoutbut(false);
                setCheckinbut(false);
                setWherebuttoggled(false);
                setAddguestbut(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return()=>{
            document.removeEventListener('mousedown',handleClickOutside);
        };
    },[]);
    return(
        <div>
                <div className='center butgroup'>
                    <div class="btn-group mr-2 border" role="group" aria-label="First group">
                        <button type="button" class="btn btn-light" onClick={handleWherebut}>
                            <div className="text-start" >Where</div>
                            <input type="text" className="form-control form-control-sm no-border focus-ring focus-ring-light" placeholder="Search Destinations"></input>
                        </button>

                        <button type="button" class="btn btn-light" onClick={handleCheckinbut} style={{display: onTogglebut? 'block': 'none'}}>
                            <div className='text-start'>Date</div>
                            <div className="text-muted text-start">Add dates</div>
                        </button>
                        
                        <button type="button" class="btn btn-light" onClick={handleCheckinbut} style={{display: onTogglebut? 'none': 'block'}}>
                            <div className='text-start'>Check in</div>
                            <div className="text-muted text-start">Add dates</div>
                        </button>
                        
                        <button type="button" class="btn btn-light" onClick={handleCheckoutbut} style={{display: onTogglebut? 'none': 'block'}}>
                            <div className='text-start'>Check out</div>
                            <div className="text-muted text-start">Add dates</div>
                        </button>

                        <button type="button" class="btn btn-light" onClick={handleAddguestbut}>
                            Add Guests
                            <button className="btn btn-danger rounded-pill ms-2 me-0">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span className='ms-1'>Search</span>
                            </button>
                        </button>
                    </div>
                </div>

                <div className="container-fluid bg-none center dropdown-content heightauto d-flex justify-content-center h-50" >
                    <div className="worldmapb" style={{display: isWherebuttoggled? 'block':'none'}} ref={butRef}>worldmapB</div>
                    <div className="worldmapa" style={{display: isCheckinbut? 'block':'none'}} ref={butRef}>Check In</div>
                    <div className="worldmapa" style={{display: isCheckoutbut? 'block':'none'}} ref={butRef}>Check Out</div>
                    <div className="worldmapc" style={{display: isAddguestbut? 'block':'none'}} ref={butRef}>worldmapC</div>
                </div>
        </div>

    );
}

export default Subbut;