import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const Register = () => {
    const {handleRegister,handleEmail,handlePassword,googleSingIn,error} = useFirebase()
    return (
        <div className="d-flex justify-content-center py-5">

        <div className="col-md-4 col-12 text-center ">
             <h3 className="fw-bold ">Please Register</h3>
             <br/><br/>
             <form onSubmit={handleRegister}>
  
                <div class="row mb-4">
                    <div class="col">
                    <div class="form-outline">
                        <input type="text" id="form3Example1" class="form-control" />
                        <label class="form-label" for="form3Example1">First name</label>
                    </div>
                    </div>
                    <div class="col">
                    <div class="form-outline">
                        <input type="text" id="form3Example2" class="form-control" />
                        <label class="form-label" for="form3Example2">Last name</label>
                    </div>
                    </div>
                </div>

                
                <div class="form-outline mb-4">
                    <input type="email" onBlur={handleEmail} id="form3Example3" class="form-control" />
                    <label class="form-label" for="form3Example3">Email address</label>
                </div>

                
                <div class="form-outline mb-4">
                    <input type="password" onBlur={handlePassword} id="form3Example4" class="form-control" />
                    <label class="form-label" for="form3Example4">Password</label>
                </div>

                
                <input type="submit" className="btn btn-primary btn-block mb-4" value="Submit" />
             </form>
             <p className="text-danger">{error}</p>
             <p>you have an account <Link to="/login">Log in </Link></p>
     
             <div>---------- <span className="fw-bold">Or</span>  -----------</div>
              
              <button onClick={googleSingIn }>Sing up Google</button>
        </div>
    </div>
    );
};

export default Register;