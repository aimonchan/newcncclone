import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Modal} from 'react-bootstrap';
import React, {useState, useRef, useEffect} from 'react';

function Globeicon(){
    const[isModal,setModal]=useState(false);
    const modalRef=useRef(null);
    const handleModal=()=>{
        setModal(true);
    }

    const offModal=()=>{
        setModal(false);
    };

   

    return(
        <>
        <Button onClick={handleModal} type="button" className="btn btn-light rounded-pill border-0 d-inline-block" data-toggle="modal" data-target="#exampleModalLong"><i className="fa-solid fa-globe"></i></Button>

        <Modal show={isModal} onClick={offModal} ref={modalRef}>
            Hello
        </Modal>
        
        </>
    );
}

export default Globeicon;