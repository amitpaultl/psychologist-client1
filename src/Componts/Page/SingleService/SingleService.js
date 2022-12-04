import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import './SingleService.css'
import { AuthProvider } from '../../Context/AuthContext';
import PrivateRouter from '../../Router/PrivateRouter/PrivateRouter';
import { toast, ToastContainer } from 'react-toastify';

const SingleService = () => {
    const { user } = useContext(AuthProvider)
    const { id } = useParams()
    const [senglaServic, setSenglaService] = useState([])

    // display comment no reload
    const [reload, setRelpad]=useState(false)
    // review all 
    const [review, setreview] = useState([]);
    // const reverseReview = review.reverse()


    // nagivet0
    const nagivet = useNavigate()

    useEffect(() => {
        fetch(`https://psychol-server.vercel.app/serviceall/${id}`)
            .then(res => res.json())
            .then(data => setSenglaService(data?.data))
    }, [])

    //  // review all get 
    useEffect(() => {
        fetch(`https://psychol-server.vercel.app/reviewdis?id=${id}`)
            .then(res => res.json())
            .then(data => setreview(data?.data))
    }, [reload])


    

    // login handale
    const loginHandaler = () => {
        nagivet('/login')
    }


    // comment handaler
console.log(user);
    const commentHandaler = (e) => {
        e.preventDefault()

        const review = e.target.comment.value;
        const comment = {
            email: user?.email,
            review: review,
            product: senglaServic,
            name: user?.displayName
        }

        fetch(`https://psychol-server.vercel.app/review`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    toast.success(data?.message)
                    e.target.reset();
                    setRelpad(!reload);
                }
                e.target.reset()
            })



    }

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
                            {
                                review.map(reating =>

                                    <div key={reating?._id}  className="review-user">
                                        <div className="profile-img-comment">
                                        <p>{reating?.name}</p>
                                        <img src="https://html.modernwebtemplates.com/psychologist/images/faces/02.jpg" alt="" />
                                        </div>
                                        
                                        
                                        <p >{reating?.review}</p>
                                    </div>
                                )
                            }

                            <div className="comment-form">

                                {
                                    user ? <form onSubmit={commentHandaler}>
                                        <Form.Control as="textarea" name='comment' placeholder='Comment' rows={3} />

                                        <input type="submit" className='comment-submit' value={'SIBMIT'} />

                                    </form> : <button onClick={loginHandaler} className='comment-submit'>LOGIN</button>
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleService;