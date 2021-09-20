import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import Button from '@material-ui/core/Button';
import ModalDialog from '../ModalDialog';
import { useState } from 'react';


export default function SignUp() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
    <>

        <h1 className="sign-up">GET STARTED</h1>
        <h2 className="sign-up-text">CLICK HERE TO SIGN UP</h2> 
        <div className="sign-up-btn-container">  
         
          <Button className="sign-up-btn" variant="contained" color="primary"  onClick={handleOpen} >
            Signup
          </Button>
          <ModalDialog open={open} handleClose={handleClose} />
        </div>

        <Footer/>
    </>
    )
}