import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="d-flex justify-content-center container ">
               
                    <div className="col-md-8 col-12 my-5">
                        <h2 className="text-center contact-text">Contact Form</h2>
                    <div className="row">
                        <div className="col-6 ">
                            <span>First name:</span>
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div className="col-6">
                        <span>Last name:</span>
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                        </div>

                        <div className="my-3">
                            <span>Your Email:</span>
                            <input type="email" className="form-control" placeholder="Enter Your Email"/>
                        </div>
                        <div className="">
                        <span>Phone Number:</span>
                            <input type="number" className="form-control" placeholder="Enter Your number" />
                        </div>

                        <div className="form-floating my-3">
                            <span>Enter your problem</span>
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" height="200px"></textarea>
                            <label for="floatingTextarea2">Please</label>
                        </div>

                        </div>

                       
                     
                    </div>
               </div>
            </div>
        
    );
};

export default Contact;