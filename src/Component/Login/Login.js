import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import './Login.css'

const Login = () => {
     const {user,googleSingIn,handleEmail,handlePassword,error,handleLogin} = useFirebase();
   
     console.log(user)

     
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
                 </form>

                 <p>Are you new user <Link to="/register"> Create new Account</Link></p>
         
            <div>---------- <span className="fw-bold">Or</span>  -----------</div>
            <button type="button" class="btn btn-primary btn-lg" onClick={googleSingIn}>Google SingIN</button>
            </div>

        </div>
    );
};

export default Login;