import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import './Header.css'
import img from './logo .png'

const Header = () => {
    const {user,logOut} = useFirebase()
    console.log(user)
    return (
        <div>
        <div className="header">
           <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/home">
                 <img src={img} width="150" height="60" alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 ml-5 mb-lg-0 nav-ul-li">
                    <li className="nav-item header-link">
                    <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-item header-link">
                    <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item header-link">
                    <Link to="/service">
                        Service
                    </Link>
                    </li>
                    <li className="nav-item header-link">
                    <Link to="/contact">
                        Contact
                    </Link>
                    </li>
                   
                
                </ul>
                <from className="d-flex">

                   
                   {    
                       user.email ?
                        <div className="d-flex">
                            <img src={user.photoURL} className="rounded-circle my-auto img-fluid" alt="" width="30px" height="30px" />
                        <h5 className="mx-3 my-auto">{user.displayName}</h5>
                       <button onClick={logOut} className="btn btn-outline-success " type="submit">Log Out</button>
                       </div>
                       :<div>
                        <Link to="/login"><button className="btn btn-outline-success " type="submit">Log In</button></Link>
                        <Link to="/register"><button className="btn btn-outline-success mx-2" type="submit">Register</button></Link>
                        </div>
                   }
                </from>
                </div>
            </div>
            </nav>
        </div>
    
    </div>
    );
};

export default Header;