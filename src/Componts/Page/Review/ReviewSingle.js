import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ReviewSingle = ({reating,refresh,setRefresh}) => {
    const {review,product,_id} = reating

    console.log(reating);

    const negative = useNavigate()
    // deletehandaler
    const deletehandaler =(id)=>{
        fetch(`https://psychol-server.vercel.app/review/${id}`, {
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


    // updatehandale
    const updatehandale =(id)=>{
        negative(`/update/${id}`)
    }
    return (
        <div className='col-md-12'>
            <div className="single-review">
                <PhotoProvider>
                    <PhotoView src={product?.url}>
                        <img className=' review-img'  src={product?.url}  alt="" />
                    </PhotoView>
                </PhotoProvider>
                    <h2>{product?.title}</h2>
                    <p>{review}</p>
                <div className="sengle-srivice-text">
                   <button onClick={()=>deletehandaler(_id)} className='review-but'>Delete</button>
                   <button onClick={()=>updatehandale(_id)} className='review-but'>Edit</button>
                </div>

            </div>
            <ToastContainer />

        </div>
    );
};

export default ReviewSingle;