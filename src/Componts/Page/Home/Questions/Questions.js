import React from 'react';
import './Questions.css'
import img from '../../../assarts/Image/ebook.jpg'
const Questions = () => {
    return (
        <div>
            <section className="ebook-section" data-aos="fade-up" data-aos-duration="3000">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src={img} alt=""/></figure>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title"><div className="title">book store</div></div>
                                <h1>Collect Your<br/><span>eBook</span> Right Now</h1>
                                <div className="text">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip commodo.</div>
                                <div className="btn-box"><a href="#">Start My Order</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Questions;