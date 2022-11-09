import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    return (
        <div className='col-md-4'>
            <div className="sengle-srivice mb-4">
                <img className='home-servic-img' src={service?.url} alt="" />
                <div className="sengle-srivice-text">
                    <h4>Price : {service?.price}</h4>
                    <h2>{service?.title}</h2>
                    <p>{service?.details.length >= 100 ? service?.details.slice(0, 100) + '...' : service?.details}</p>
                    <Link to={`/singleService/${service._id}`} >View All</Link>                    
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;