import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../Context/AuthContext';
import ReviewSingle from './ReviewSingle';
import './Review.css'

const Review = () => {
    const { user } = useContext(AuthProvider)
    const {email} = user

    const [reviews , setReview] = useState([]) 

    const [refresh, setRefresh] = useState(false);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${email}`)
        .then(res => res.json())
        .then(data => setReview(data.data))
    },[refresh])



    return (
        <div className='review-area'>
            <div className="container">
                <div className="row">

                    {
                        reviews.map(reating => <ReviewSingle refresh={refresh} setRefresh={setRefresh} reating={reating} key={reating._id} ></ReviewSingle>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Review;