import React from 'react';
import { useRouteError } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import './Error.css'

const Error = () => {
    // error function uplode
    const error = useRouteError()
    return (
        <div>
            <Header></Header>
            <div className="error">

                
                <div className="error-page text-center">
                    <h2 className='error-num'>404</h2>
                    <h4><i>{error.statusText || error.message}</i></h4>
                </div>
                


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;