import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Service.css'

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState([]);
    
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    const found = service.find(crouse => crouse.id === Number(serviceId));
   
    
    
    return (
        <div className="container py-5">
            {
                found?.serviceName?(
                    <div className="row">
                    <div className="col-md-6 col-6">


                       
                       
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={found.service_img1} className="d-block w-100 " height="500px" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={found.service_img2} className="d-block w-100 " height="500px" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={found.service_img} className="d-block w-100 " height="500px" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




                       
                       



                    </div>
                    <div className="col-md-6 col-6">
                    <h2 className="text-center home-service-texts fw-bold">{found.serviceName}</h2>
                    <p className="py-4">{found.description}</p>

                    <h4>Hello</h4>
                    <Link to="/service">
                        <button>
                           click this
                        </button>
                   </Link>
                    </div>
                </div>
                ):(
                    <h1>service not found</h1>
                )
            }
            
            
        </div>
    );
};

export default ServiceDetail;
