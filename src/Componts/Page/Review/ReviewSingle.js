import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { toast, ToastContainer } from 'react-toastify';

const ReviewSingle = ({reating,refresh,setRefresh}) => {
    const {review,product,_id} = reating
    // deletehandaler
    const deletehandaler =(id)=>{
        fetch(`http://localhost:5000/review/${id}`, {
            method: "DELETE",
          })
          .then(res => res.json())
          .then(data => {
            if(data.success){
              toast.success(data.message);
              setRefresh(!refresh)
            } else {
              toast.error(data.error);
            }
          }).catch(err => toast.error(err.message))
    }
    return (
        <div className='col-md-4'>
            <div className="sengle-srivice mt-4">
                <PhotoProvider>
                    <PhotoView src={product?.url}>
                        <img className='w-100' src={product?.url}  alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="sengle-srivice-text">
                    <h2>{product?.title}</h2>
                    <p>{review}</p>
                   <button onClick={()=>deletehandaler(_id)} className='review-but'>Delete</button>
                   <button className='review-but'>Edit</button>
                </div>

            </div>
            <ToastContainer />

        </div>
    );
};

export default ReviewSingle;