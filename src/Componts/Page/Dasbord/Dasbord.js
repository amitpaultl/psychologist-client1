import React from 'react';
import './Dasbord.css'
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
const Dasbord = () => {

    // service handaler
    const handalerservice = (e)=>{
        e.preventDefault();
        const common = e.target;
        const title = common.title.value;
        const price = common.price.value;
        const url = common.url.value;
        const details = common.details.value;

        const service ={
            title:title,
            price:price,
            url:url,
            details:details
        }

        fetch(`http://localhost:5000/service`,{
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
        .then(res =>res.json())
        .then(data => {
            if(data.success){
                toast.success(data.message)
            }
            e.target.reset()
        })
       
    }


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
                                <form onSubmit={handalerservice}>
                                    <div className="input-form">
                                        <input type="text" name='title' placeholder='Title Name' />
                                    </div>
                                    <div className="input-form">
                                        <input type="text" name='price' placeholder='Price' />
                                    </div>
                                    <div className="input-form">
                                        <input type="text" name='url' placeholder='Image Url' />
                                    </div>
                                    <div className="input-form">
                                    <Form.Control as="textarea" name='details' placeholder='Details' rows={6} />
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

export default Dasbord;