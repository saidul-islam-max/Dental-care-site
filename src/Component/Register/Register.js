import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import { useHistory, useLocation } from 'react-router';


const Register = () => {


    const {handleRegister,handleEmail,handlePassword,googleSingIn,handleName,handlePhoto} = useAuth()
    
    const [error,setError] = useState('')
  
     const location = useLocation()
     const history = useHistory()
     const redirect_url = location.state?.from || '/home'


     const handleGoogleLogin = () =>{
         googleSingIn()
         .then((result) => {
            console.log(result.user)
           history.push(redirect_url)
        })
        .catch((error)=>{
            setError(error.message)
        })
     }

    
    return (
        <div className="d-flex justify-content-center py-5">

        <div className="col-md-4 col-12 text-center ">
             <h3 className="fw-bold ">Please Register</h3>
             <br/><br/>
             <form onSubmit={handleRegister}>
  
                
                   
                    <div className="form-outline mb-4">
                        <input type="text" onBlur={handleName} id="form3Example1" className="form-control" />
                        <label className="form-label"  for="form3Example1">First name</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="" onBlur={handlePhoto} id="form3Example1" className="form-control" />
                        <label className="form-label"  for="form3Example1">Yor Image Url</label>
                    </div>
                    
                   
                

                
                <div className="form-outline mb-4">
                    <input type="email" onBlur={handleEmail} id="form3Example3" className="form-control" />
                    <label className="form-label" for="form3Example3">Email address</label>
                </div>

                
                <div className="form-outline mb-4">
                    <input type="password" onBlur={handlePassword} id="form3Example4" className="form-control" />
                    <label className="form-label" for="form3Example4">Password</label>
                </div>

                
                <input type="submit" className="btn btn-primary btn-block mb-4" value="Submit" />
             </form>
             <p className="text-danger">{error}</p>
             <p>you have an account <Link to="/login">Log in </Link></p>
     
             <div>---------- <span className="fw-bold">Or</span>  -----------</div>
              
              <button onClick={handleGoogleLogin }>Sing up Google</button>
        </div>
    </div>
    );
};

export default Register;