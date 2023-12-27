import Logo from './Logo';
import Tributton from './Tributton';
import Demo from './Demo';
import Subbut from './Subbut';
import Rightbutton from './Rightbutton';
import React, {useState, useRef, useEffect} from 'react';



function Rowtwo(){

const[isData,setData]=useState(false);
const tributRef = useRef(null);
const handleDatatoggled=()=>{
setData(!isData)
}

useEffect(()=>{
const handleOutsideclick=(event)=>{
    if(tributRef.current && !tributRef.current.contains(event.target)){
        setData(false);
    }
};
document.addEventListener('mousedown', handleOutsideclick);
return()=>{
    document.removeEventListener('mousedown', handleOutsideclick);
}
},[tributRef]);


    return(
        <>
        <div className='d-flex align-items-center justify-content-between' style={{background:'white'}} ref={tributRef}>
            <Logo/>
            <div onClick={handleDatatoggled} style={{display: isData? 'none':'block'}} ref={tributRef}>
                <Tributton />
            </div>

            <div style={{display: isData? 'block':'none'}} ref={tributRef}>
                <Demo />
            </div>

            <Rightbutton/>
        </div>
        <div style={{display: isData? 'block':'none', background:'white'}} ref={tributRef}>
        <Subbut />
        </div>
        </>
    );
}

export default Rowtwo;