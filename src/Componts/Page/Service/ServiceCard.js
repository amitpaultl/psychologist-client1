import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({ service }) => {
    return (
        <div className='col-md-4'>
            <div className="sengle-srivice mb-4">
                <PhotoProvider>
                    <PhotoView src={service?.url}>
                        <img className='w-100' src={service?.url} alt="" />
                    </PhotoView>
                </PhotoProvider>
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