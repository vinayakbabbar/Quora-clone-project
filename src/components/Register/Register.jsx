import React from "react";
import "../Register/Register.css";
import Button from "../Button/Button";


const Register = ()=>{

    return(
        <div className="main-div-register">
            <div className='register_div'>
                <div>
                    <h1>New Register</h1>  
                </div>
                <div> 
                    <input className="input-style-register" placeholder="Enter Email" type="email" required/>
                </div> 
                <div>          
                    <input className="input-style-register" placeholder="Enter Username" type="text" required/>  
                </div> 
                <div> 
                    <input className="input-style-register" placeholder="Enter Password" type="password" required/>
                </div>                 
                <div >  
                    <Button style={{fontSize:"1rem" ,width:"6rem",marginTop:"0px"}}><span>Register</span></Button>                      
                </div>
            </div>
        </div>
    )

}
export default Register