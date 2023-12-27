import Tributton from './Tributton';
import './CentercombineBut.css';
import Demo from './Demo';
import React, {useState} from 'react';

function CentercombineBut(){

    const[isTributtontoggled,setTributtontoggled]= useState(false);
    const handleTributtontoggled=()=>{
        setTributtontoggled(!isTributtontoggled);
    };


    return(
        <div>
            <Tributton onClick={handleTributtontoggled} className={isTributtontoggled? 'hide':''}/>
            <Demo style={{display: isTributtontoggled? 'block':'none'}}/>
        </div>
    );
}

export default CentercombineBut;