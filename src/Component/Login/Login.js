import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hook/useAuth';

import './Login.css'

const Login = () => {
    
     const {googleSingIn,handleEmail,handlePassword,handleLogin,error,handleResetPassword} = useAuth();
     const [errors,setErrors] = useState('')
     
     const location = useLocation()
     const history = useHistory()
     const redirect_url = location.state?.from || '/home'


     const handleGoogleLogin = () =>{
         googleSingIn()
         .then((result) => {
         
           history.push(redirect_url)
        })
        .catch((error)=>{
            setErrors(error.message)
        })
     }

     
    return (
        <div className="d-flex justify-content-center py-5">

            <div className="col-md-6 col-12 text-center ">
                 <h3 className="fw-bold ">Please Log In</h3>
                 <br/><br/>
                 <form onSubmit={handleLogin} >
                     <input type="email" onBlur={handleEmail} name=" " className="p-2" id="" placeholder="Enter yuor email" />
                     <h5> </h5>
                     <input type="password" onBlur={handlePassword} name="" id="" className="p-2" placeholder="Enter your password" />
                   <br/><h5> </h5>
                  <input type="submit" value="Submit" />
                 </form><br/><br/>
                 <button onClick={handleResetPassword}>Reset password</button>
                 <p className="text-danger">{errors}</p>
                 <p className="text-danger">{error}</p>
                 <p>Are you new user <Link to="/register"> Create new Account</Link></p>
         
            <div>---------- <span className="fw-bold">Or</span>  -----------</div>
            <button type="button" className="btn btn-primary btn-lg" onClick={handleGoogleLogin}>Google SingIN</button>
            </div>

        </div>
    );
};

export default Login;