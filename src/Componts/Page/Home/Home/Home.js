import React from 'react';
import './Home.css'
import { FaHandshake } from "react-icons/fa";
const Home = () => {
    return (
        <div>
            {/* hero area */}
            <section className="hero-area">
                <div className="hero-text text-center">
                    <h2>Rita Solomou</h2>
                    <p>PREMIUM TEMPLATE</p>
                </div>
            </section>
            {/* offer area */}
            <section className="offer-area">
                <div className="title-area text-center">
                    <h2>What We Can Offer</h2>
                    <p>Porchetta dolor magna ipsum. Irure beef ribs chicken dolore, laboris filet mignon ribeye bacon swine pork <br /> loin commodo pork chop corned beef hamburger.</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/relationship.png" alt="" />
                                <h4>RELATIONSHIP</h4>
                                <p>A therapy that helps establish a more profound ground for healthy relationship.</p>
                            </div>
                        </div>
                        <div className="col-md-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/mental.png" alt="" />
                                <h4>RELATIONSHIP</h4>
                                <p>A therapy that helps establish a more profound ground for healthy relationship.</p>
                            </div>
                        </div>
                        <div className="col-md-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/feelings.png" alt="" />
                                <h4>RELATIONSHIP</h4>
                                <p>A therapy that helps establish a more profound ground for healthy relationship.</p>
                            </div>
                        </div>
                        <div className="col-md-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/relationship.png" alt="" />
                                <h4>RELATIONSHIP</h4>
                                <p>A therapy that helps establish a more profound ground for healthy relationship.</p>
                            </div>
                        </div>
                        <div className="col-md-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/relationship.png" alt="" />
                                <h4>RELATIONSHIP</h4>
                                <p>A therapy that helps establish a more profound ground for healthy relationship.</p>
                            </div>
                        </div>
                        <div className="col-md-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/relationship.png" alt="" />
                                <h4>RELATIONSHIP</h4>
                                <p>A therapy that helps establish a more profound ground for healthy relationship.</p>
                            </div>
                        </div>
                        <div className="col-md-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/relationship.png" alt="" />
                                <h4>RELATIONSHIP</h4>
                                <p>A therapy that helps establish a more profound ground for healthy relationship.</p>
                            </div>
                        </div>
                        <div className="col-md-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/relationship.png" alt="" />
                                <h4>RELATIONSHIP</h4>
                                <p>A therapy that helps establish a more profound ground for healthy relationship.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Welcome  area */}
            <section className='welcome-area'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 image-wel">
                            <div className="welcome-image">
                                
                                <img src="https://html.modernwebtemplates.com/psychologist/images/person.png" alt="" />
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="welcome-text">
                                <h4>Welcome to Psychologist & Family Consulting</h4>
                                <h5>It's my goal to create a comfortable, safe environment, where we'll work to achieve the goal together.</h5>
                                <p>I am a certified specialist in the branch of psychology concerned with the assessment and treatment of mental illness and behavioural problems. My other passion is publishing. You can find and purchase all my books within this site.</p>
                                <FaHandshake></FaHandshake>
                                <h5>RONDA SOLOMOU <span>Psychologist</span></h5>
                                <img className='singe' src="https://html.modernwebtemplates.com/psychologist/images/signature.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;