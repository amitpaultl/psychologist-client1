import React from 'react';
import './Questions.css'
import img from '../../../assarts/Image/ebook.jpg'
const Questions = () => {
    return (
        <div>
            <section class="ebook-section" data-aos="fade-up" data-aos-duration="3000">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 image-column">
                            <div class="image-box">
                                <figure class="image"><img src={img} alt=""/></figure>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-6 col-sm-12 content-column">
                            <div class="content-box">
                                <div class="sec-title"><div class="title">book store</div></div>
                                <h1>Collect Your<br/><span>eBook</span> Right Now</h1>
                                <div class="text">Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip commodo.</div>
                                <div class="btn-box"><a href="#">Start My Order</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Questions;