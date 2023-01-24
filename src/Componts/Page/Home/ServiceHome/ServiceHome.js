import React, { useEffect, useState } from 'react';
import ServicePopus from './ServicePopus';
import './ServiceHome.css'
import { Link } from 'react-router-dom';
const ServiceHome = () => {
    // service lode home page
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`https://psychol-server.vercel.app/service`)
            .then(res => res.json())
            .then(data => setService(data.data))
    }, [])

    return (
        <div className='service-area' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="title-area text-center">
                        <h2>Service</h2>
                        <p>Porchetta dolor magna ipsum. Irure beef ribs chicken dolore, laboris filet mignon ribeye bacon swine pork <br /> loin commodo pork chop corned beef hamburger.</p>
                    </div>
                    {
                        service.map(service => <ServicePopus
                            key={service._id}
                            service={service}
                        ></ServicePopus>)
                    }
                    <div className="sengle-srivice-text text-center mt-4">
                        <Link to={'/service'}>SEE ALL SERVICE</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHome;