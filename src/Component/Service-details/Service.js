import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
             <div className="my-5">
               <div className="container">
                   <h2 className="text-center home-service-texts fw-bold">
                       Our Service
                   </h2>

                <div className="row">
                  
                  {
                      service.map(service => 
                      <div service={service} key={service.id} className="col-md-4 mt-5">
                      <div className="p-2 border ser-img">
                         <img src={service.service_img1} height="250px" width="100%"  alt="" /> 
                      </div> 
                    <h4 className="fw-bold mt-2">{service.serviceName}:</h4>
                    <p>{service.description.slice(0,100)}</p>

                   <Link to={`/servicDetails/${service.id}`}>
                     <button>click thiss</button>
                   </Link>
                    </div>
                    )
                  }
                    
                 </div>   
               </div>
            </div>
        </div>
    );
};

export default Service;