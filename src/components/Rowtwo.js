import Logo from './Logo';
import Tributton from './Tributton';
import Demo from './Demo';
import Subbut from './Subbut';
import Rightbutton from './Rightbutton';
import React, {useState} from 'react';



function Rowtwo(){

const[isData,setData]=useState(false);
const handleDatatoggled=()=>{
setData(!isData)
}
    return(
        <>
        <div className='d-flex align-items-center justify-content-evenly'>
            <Logo/>
            <div style={{display: isData? 'none':'block'}}>
                <Tributton onClick={handleDatatoggled} />
            </div>

            <div style={{display: isData? 'block':'none'}}>
                <Demo />
            </div>

            <Rightbutton/>
        </div>
        <div style={{display: isData? 'block':'none'}}>
        <Subbut />
        </div>
        </>
    );
}

export default Rowtwo;