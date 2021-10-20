import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="d-flex justify-content-center container ">
               
                    <div className="col-md-8 col-12 my-5">
                        <h2 className="text-center contact-text">Contact Form</h2>
                    <div class="row">
                        <div class="col-6 ">
                            <span>First name:</span>
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div class="col-6">
                        <span>Last name:</span>
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                        </div>

                        <div class="my-3">
                            <span>Your Email:</span>
                            <input type="email" class="form-control" placeholder="Enter Your Email"/>
                        </div>
                        <div class="">
                        <span>Phone Number:</span>
                            <input type="number" class="form-control" placeholder="Enter Your number" />
                        </div>

                        <div class="form-floating my-3">
                            <span>Enter your problem</span>
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" height="200px"></textarea>
                            <label for="floatingTextarea2">Please</label>
                        </div>

                        </div>

                       
                     
                    </div>
               </div>
            </div>
        
    );
};

export default Contact;