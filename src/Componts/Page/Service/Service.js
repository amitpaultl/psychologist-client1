import React, { useEffect, useState } from 'react';
import useTitle from '../../Usehook/Usetitle';
import ServiceCard from './ServiceCard';

const Service = () => {
        //title
        useTitle('Service')
    //set service
    const [service, setService] = useState([])

    useEffect(() => {
        fetch(`https://psychol-server.vercel.app/serviceall`)
            .then(res => res.json())
            .then(data => setService(data.data))
    }, [])


    return (
        <div className='py-5 ' style={{ backgroundColor: '#caebe0' }}>
            <div className="container">
                <div className="row">
                    <div className="title-area text-center">
                        <h2>ALL SERVICE</h2>
                        <p>Porchetta dolor magna ipsum. Irure beef ribs chicken dolore, laboris filet mignon ribeye bacon swine pork <br /> loin commodo pork chop corned beef hamburger.</p>
                    </div>
                    {
                        service.map(service => <ServiceCard key={service?._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Service;