import React from 'react';
import './Dasbord.css'
import Form from 'react-bootstrap/Form';
const Dasbord = () => {
    return (
        <section className='dasbord-area'>

            <div className='container'>
               
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="bg-login">
                            <div className="singForm">
                                <div className="title-login text-center">
                                    <h2>ADD SERVICE</h2>
                                </div>
                                <form>
                                    <div className="input-form">
                                        <input type="text" name='title' placeholder='Title Name' />
                                    </div>
                                    <div className="input-form">
                                        <input type="text" name='title' placeholder='Price' />
                                    </div>
                                    <div className="input-form">
                                        <input type="text" placeholder='Image Url' />
                                    </div>
                                    <div className="input-form">
                                    <Form.Control as="textarea" placeholder='Details' rows={6} />
                                    </div>

                                    <button className='submit' type='submit'>SUMBIT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Dasbord;