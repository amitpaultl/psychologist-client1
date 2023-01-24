import React from 'react';
import image1 from '../../../assarts/Image/news-1.jpg'
import image2 from '../../../assarts/Image/news-2.jpg'
import image3 from '../../../assarts/Image/news-3.jpg'
import './Aritcal.css'
const Aritcal = () => {
    return (
        <div>
            <section className="news-section" data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="title">my blog</div>
                        <h1>Latest Articles</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><a href="blog-details.html"><img src={image1} alt=""/></a></figure>
                                    <div className="categorie-list">
                                        <a href="#">Couples</a>
                                        <a href="#">Therapy</a>
                                    </div>
                                    <div className="lower-content">
                                        <ul className="post-info">
                                            <li>by <span>Kirstin Hagen</span></li>
                                            <li>On 25 Mar, 2019</li>
                                        </ul>
                                        <h3><a href="blog-details.html">You Can’t Judge Depression by its Cover</a></h3>
                                        <div className="btn-box"><a href="blog-details.html" className="theme-btn-two">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><a href="blog-details.html"><img src={image2} alt=""/></a></figure>
                                    <div className="categorie-list">
                                        <a href="#">Couples</a>
                                        <a href="#">Therapy</a>
                                    </div>
                                    <div className="lower-content">
                                        <ul className="post-info">
                                            <li>by <span>Kirstin Hagen</span></li>
                                            <li>On 24 Mar, 2019</li>
                                        </ul>
                                        <h3><a href="blog-details.html">Ratione voluptem seque nesciunt.</a></h3>
                                        <div className="btn-box"><a href="blog-details.html" className="theme-btn-two">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><a href="blog-details.html"><img src={image3} alt=""/></a></figure>
                                    <div className="categorie-list">
                                        <a href="#">Couples</a>
                                        <a href="#">Therapy</a>
                                    </div>
                                    <div className="lower-content">
                                        <ul className="post-info">
                                            <li>by <span>Kirstin Hagen</span></li>
                                            <li>On 23 Mar, 2019</li>
                                        </ul>
                                        <h3><a href="blog-details.html">We Schedule your discuss it and create a plan</a></h3>
                                        <div className="btn-box"><a href="blog-details.html" className="theme-btn-two">Read More</a></div>
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