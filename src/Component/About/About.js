import React from 'react';
import Choice from '../Choice/Choice';
import Contact from '../Contact/Contact';
import './About.css'
import  about1   from './about1.jpg'
import  about2   from './about2.jpg'
import  about3   from './about3.jpg'

const About = () => {
    return (
        <div className=" ">
              <div className="container mt-5 bg-light py-5">
                  <div className="row">
                  <div className="col-md-6 p-3">
                  <img src={about2} height="500px" width="100%" className="" alt="" />
                      </div>

                      <div className="col-md-6">
                          <h2 className="fw-bold">WELLCOME TO <span className="text-info">CARDIAC DENTAL CARE</span> </h2>
                          <p className=" "><span className="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nobis cupiditate, accusantium soluta sequi quod ullam deserunt dicta iusto iure corporis consequuntur harum dolorem dignissimos sunt tempore aliquam quidem quia voluptate</span><br/><br/> distinctio itaque magni est cum cumque. Corrupti dolores amet laboriosam ipsa esse debitis fuga vel, optio assumenda omnis similique mollitia sequi nihil praesentium dignissimos iste deserunt fugit voluptates ducimus alias atque illum. Quos blanditiis voluptatum repellat assumenda error ea.</p>
                          <div className="row">
                              <div className="col-md-4 col-12">
                                  <img src={about1} height="200" className="img-fluid" alt="" />
                              </div>
                              <div className="col-md-4 col-12">
                                  <img src={about2} height="200" className="img-fluid" alt="" />
                              </div>
                             
                          </div>
                          <br/>
                          <button>click this</button>
                      </div>
                     
                  </div>
              </div>

            
              
          </div>

          

    );
};

export default About;