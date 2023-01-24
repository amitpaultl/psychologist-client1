import React from 'react';
import image1 from '../../../assarts/Image/1.jpg'
import image2 from '../../../assarts/Image/2.jpg'
import image3 from '../../../assarts/Image/3.jpg'
import image4 from '../../../assarts/Image/4.jpg'
import image5 from '../../../assarts/Image/5.jpg'
import image6 from '../../../assarts/Image/6.jpg'
import image7 from '../../../assarts/Image/7.jpg'
import image8 from '../../../assarts/Image/8.jpg'
import './Projects.css'
const Projects = () => {
    return (
        <div>
            <section id="projectsGallery4col" className="projects projects-gallery p-0" data-aos="fade-up" data-aos-duration="2000">
                <div className="container-fluid col-padding-0">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3" >
                            <div className="project-item">
                                <div className="project__img">
                                    <img src={image1} alt="project img"/>
                                        <div className="project__hover">
                                            <div className="hover__content">
                                                <div className="hover__content-inner">
                                                    <h4 className="project__title"><a href="#">The Living Branding</a></h4>
                                                    <div className="project__cat">
                                                        <a href="#">Branding</a><a href="#">Print</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3" >
                            <div className="project-item">
                                <div className="project__img">
                                    <img src={image2} alt="project img"/>
                                        <div className="project__hover">
                                            <div className="hover__content">
                                                <div className="hover__content-inner">
                                                    <h4 className="project__title"><a href="#">Calender Poster Mockup</a></h4>
                                                    <div className="project__cat">
                                                        <a href="#">Branding</a><a href="#">Print</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3" >
                            <div className="project-item">
                                <div className="project__img">
                                    <img src={image3} alt="project img"/>
                                        <div className="project__hover">
                                            <div className="hover__content">
                                                <div className="hover__content-inner">
                                                    <h4 className="project__title"><a href="#">Kate &amp; Tubby Branding</a></h4>
                                                    <div className="project__cat">
                                                        <a href="#">Branding</a><a href="#">Print</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3" >
                            <div className="project-item">
                                <div className="project__img">
                                    <img src={image4} alt="project img"/>
                                        <div className="project__hover">
                                            <div className="hover__content">
                                                <div className="hover__content-inner">
                                                    <h4 className="project__title"><a href="#">Yellow Cards Print</a></h4>
                                                    <div className="project__cat">
                                                        <a href="#">Branding</a><a href="#">Print</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3" >
                            <div className="project-item">
                                <div className="project__img">
                                    <img src={image5} alt="project img"/>
                                        <div className="project__hover">
                                            <div className="hover__content">
                                                <div className="hover__content-inner">
                                                    <h4 className="project__title"><a href="#">Double Gate Brochure</a></h4>
                                                    <div className="project__cat">
                                                        <a href="#">Branding</a><a href="#">Print</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3" >
                            <div className="project-item">
                                <div className="project__img">
                                    <img src={image6} alt="project img"/>
                                        <div className="project__hover">
                                            <div className="hover__content">
                                                <div className="hover__content-inner">
                                                    <h4 className="project__title"><a href="#">Business Card MockUp</a></h4>
                                                    <div className="project__cat">
                                                        <a href="#">Branding</a><a href="#">Print</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3" >
                            <div className="project-item">
                                <div className="project__img">
                                    <img src={image7} alt="project img"/>
                                        <div className="project__hover">
                                            <div className="hover__content">
                                                <div className="hover__content-inner">
                                                    <h4 className="project__title"><a href="#">Coffee Inn Packaging</a></h4>
                                                    <div className="project__cat">
                                                        <a href="#">Branding</a><a href="#">Print</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3" >
                            <div className="project-item">
                                <div className="project__img">
                                    <img src={image8} alt="project img"/>
                                        <div className="project__hover">
                                            <div className="hover__content">
                                                <div className="hover__content-inner">
                                                    <h4 className="project__title"><a href="#">Flyer Presentation</a></h4>
                                                    <div className="project__cat">
                                                        <a href="#">Branding</a><a href="#">Print</a>
                                                    </div>
                                                </div>
                                            </div>
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

export default Projects;