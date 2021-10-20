import React from 'react';
import './Footer.css'

import { faStethoscope,faAmbulance,faCalendarCheck,faPhone,faVoicemail,faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const location =  <FontAwesomeIcon icon={faLocationArrow} /> ;
const phone =  <FontAwesomeIcon icon={faPhone} /> ;
const email =  <FontAwesomeIcon icon={faVoicemail} /> ;

const Footer = () => {
    return (
        <div className="bg-dark py-4">
        <div className="  container">
            <div className="row ">
                <div className="col-md-3 col-6 text-light">
                    <h3 className="fw-bold footer-text">Quik Appointment</h3>
                    <br/>
                    <p>Fill thi form to get quike appointment</p>

                    <input type="email" name="" id="" placeholder="Enter your email" /><br/> 
                    <input type="number" name="" id="" className="my-2" placeholder="enter your phone" />
                    <br/>
                    <button type="button" class="btn btn-info">Submit</button>
                  </div>

                  <div className="col-md-3 col-6 text-light">
                  <h3 className="fw-bold footer-text">Service</h3><br/>
                  <p className="footer-p">Clips and Braces</p>
                  <p className="footer-p">Dental Implant</p>
                  <p className="footer-p">Root Canal</p>
                  <p className="footer-p">Teeth Cleaning</p>
                  <p className="footer-p">Cavity protection</p>
                  <p className="footer-p">Paradontosis</p>
                  </div>

                  <div className="col-md-3 col-6 text-light">
                  <h3 className="fw-bold footer-text">Office Hours</h3><br/>
                  <p className="footer-p">Saterday: 9.00-17.00</p>
                  <p className="footer-p">Sunday: 9.00-17.00</p>
                  <p className="footer-p">Monday:9.00-17.00</p>
                  <p className="footer-p">Thue-Wed:9.00-17.00</p>
                  <p className="footer-p">Thursday:9.00-14.00</p>
                  <p className="footer-p">Friday: OFF</p>
                  </div>

                  <div className="col-md-3 col-6 text-light">
                  <div className="row">

                        <div className="col-md-12 col-12 d-flex ">
                            <h1 className="fx-4 p-2 border">{location}</h1>
                            <div className="ps-2">
                                <h6 className="fw-bold">ADDRESS:</h6>
                                <p className="text">Address Mohipal S.S.K. Road,,Old Dhaka-Chittagong Hwy, </p>
                            </div>
                        </div>
                        <div className="col-md-12 col-12 d-flex ">
                            <h1 className="fx-4 p-2 border">{phone}</h1>
                            <div className="ps-2">
                                <h6 className="fw-bold">Contact Number</h6>
                                <p className="text">01700504635</p>
                                <p className="text">0176464***3</p>
                            </div>
                        </div>
                        <div className="col-md-12 col-12 d-flex ">
                            <h1 className="fx-4 p-2 border">{email}</h1>
                            <div className="ps-2">
                                <h6 className="fw-bold">Contact Email</h6>
                                <p className="text">mdsaidulislamjuned@gmail.com</p>
                                <p className="text">mdsaidulislam1234@gmail.com</p>
                            </div>
                        </div>

                   </div>

                  </div>
            </div>
            
        </div>
        </div>
    );
};

export default Footer;