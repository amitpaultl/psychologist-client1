import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

const UpdateReview = () => {

    const { id } = useParams()

    // default value set
    const [product, setProduct] = useState()

    // default value

    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
          .then((res) => res.json())
          .then(data => setProduct(data.data))
    }, []);

    // update handaler

    const updatehandaler = (e) =>{
        e.preventDefault();
        const common = e.target.review.value;
        console.log(common);

    }

    return (
        <section className='dasbord-area'>

            <div className='container'>

                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="bg-login">
                            <div className="singForm">
                                <div className="title-login text-center">
                                    <h2>UPDATE REVIEW</h2>
                                </div>
                                <form onSubmit={updatehandaler}>
                                    <div className="input-form">
                                        <Form.Control as="textarea" defaultValue={product.review} name='review' placeholder='Review Update' rows={6} />
                                    </div>

                                    <button className='submit' type='submit'>SUMBIT</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default UpdateReview;