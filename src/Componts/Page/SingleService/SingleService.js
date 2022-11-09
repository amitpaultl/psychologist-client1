import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import './SingleService.css'

const SingleService = () => {
    const { id } = useParams()
    const [senglaServic, setSenglaService] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/serviceall/${id}`)
            .then(res => res.json())
            .then(data => setSenglaService(data.data))
    }, [])
    console.log(senglaServic);

    return (
        <div className='single-page-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="single-page">
                            <img className='single-img' src={senglaServic?.url} alt="" />
                            <div className="single-text">
                                <h3>Price ${senglaServic?.price}</h3>
                                <h2>{senglaServic?.title}</h2>
                                <p>{senglaServic?.details}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="comment-area">
                            <h2>All Review</h2>
                            <div className="review-user">
                                <img src="https://html.modernwebtemplates.com/psychologist/images/faces/02.jpg" alt="" />
                                <p > Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="comment-form">
                                <form>
                                    <Form.Control as="textarea" name='details' placeholder='Details' rows={3} />

                                    <input type="submit" className='comment-submit' value={'SIBMIT'} />

                                </form>
                                <button className='comment-submit'>LOGIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;