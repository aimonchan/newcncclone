import React, {useState,useEffect,useRef} from 'react';
import Logo from './Logo';
import Tributton from './Tributton';
import Rightbutton from './Rightbutton';
import Subbut from './Subbut';
import './Demo.css';
function Rowtwo(){

    
    const[isData,setData]= useState(false);
    const wholeRef= useRef(null);
    const handleData=()=>{
        setData(true);
    };

    const[isChildtwinbut,setChildtwinbut]= useState(false);
    const handleChildtwinbut=()=>{
        setChildtwinbut(true);
    };
    const closeChildtwinbut=()=>{
        setChildtwinbut(false);
    }

    useEffect(()=>{
        
        const handleClickOutside=(event)=>{
            if(wholeRef.current && !wholeRef.current.contains(event.target)){
                setData(false);
                // setGoodmorningbut(false);
            }
        }
        document.addEventListener('mousedown',handleClickOutside);
        return()=>{
            document.removeEventListener('mousedown',handleClickOutside);
        }
    },[]);
    return(
        <div ref={wholeRef} style={{backgroundColor:'white'}} className='pt-2 pb-2'>
        <div className='col' >
            <div className='row'>
                <div className='col'><Logo/></div>
                <div className='col'>
                    <li onClick={handleData} style={{display: isData? 'none':'block'}}><Tributton/></li>
                    <li style={{display: isData? 'block':'none'}}>
                        <div className="demobut">
                            <div className="center divheight">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <a className='btn' onClick={closeChildtwinbut}>Stays</a>              
                                    <a className="btn" onClick={handleChildtwinbut}>Experiences</a>
                                    <a className="btn">Online Experiences</a>
                                </div>
                            </div>         
                        </div>
                    </li>
                </div>
                <div className="col"><Rightbutton/></div>
            </div>
            
            <div className='row'>
                <div style={{display: isData? 'block':'none'}}>
                    <Subbut onTogglebut={isChildtwinbut}/>
                </div>
            </div>

            </div>
        </div>
    );
}

export default Rowtwo;