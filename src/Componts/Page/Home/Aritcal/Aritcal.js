import React from 'react';
import image1 from '../../../assarts/Image/news-1.jpg'
import image2 from '../../../assarts/Image/news-2.jpg'
import image3 from '../../../assarts/Image/news-3.jpg'
import './Aritcal.css'
const Aritcal = () => {
    return (
        <div>
            <section class="news-section" data-aos="fade-up" data-aos-duration="2000">
                <div class="container">
                    <div class="sec-title text-center">
                        <div class="title">my blog</div>
                        <h1>Latest Articles</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div class="news-block-one">
                                <div class="inner-box">
                                    <figure class="image-box"><a href="blog-details.html"><img src={image1} alt=""/></a></figure>
                                    <div class="categorie-list">
                                        <a href="#">Couples</a>
                                        <a href="#">Therapy</a>
                                    </div>
                                    <div class="lower-content">
                                        <ul class="post-info">
                                            <li>by <span>Kirstin Hagen</span></li>
                                            <li>On 25 Mar, 2019</li>
                                        </ul>
                                        <h3><a href="blog-details.html">You Can’t Judge Depression by its Cover</a></h3>
                                        <div class="btn-box"><a href="blog-details.html" class="theme-btn-two">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div class="news-block-one">
                                <div class="inner-box">
                                    <figure class="image-box"><a href="blog-details.html"><img src={image2} alt=""/></a></figure>
                                    <div class="categorie-list">
                                        <a href="#">Couples</a>
                                        <a href="#">Therapy</a>
                                    </div>
                                    <div class="lower-content">
                                        <ul class="post-info">
                                            <li>by <span>Kirstin Hagen</span></li>
                                            <li>On 24 Mar, 2019</li>
                                        </ul>
                                        <h3><a href="blog-details.html">Ratione voluptem seque nesciunt.</a></h3>
                                        <div class="btn-box"><a href="blog-details.html" class="theme-btn-two">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div class="news-block-one">
                                <div class="inner-box">
                                    <figure class="image-box"><a href="blog-details.html"><img src={image3} alt=""/></a></figure>
                                    <div class="categorie-list">
                                        <a href="#">Couples</a>
                                        <a href="#">Therapy</a>
                                    </div>
                                    <div class="lower-content">
                                        <ul class="post-info">
                                            <li>by <span>Kirstin Hagen</span></li>
                                            <li>On 23 Mar, 2019</li>
                                        </ul>
                                        <h3><a href="blog-details.html">We Schedule your discuss it and create a plan</a></h3>
                                        <div class="btn-box"><a href="blog-details.html" class="theme-btn-two">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aritcal;