import React,{useState}  from 'react'
import {Form,Button,Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ModalRegister(){
 
    return(
        <div>
            
       {/* registration modal starts */}
<div className="signupbtn">
  <Link to="register">  <Button  variant="warning" >
        Sign Up
      </Button></Link> 
     
</div>
      {/* registration modal ends */}

        </div>
    );
}
export default ModalRegister;