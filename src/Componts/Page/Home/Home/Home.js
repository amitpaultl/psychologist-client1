import React from 'react';
import './Home.css'
import { FaHandshake } from "react-icons/fa";
import ServiceHome from '../ServiceHome/ServiceHome';
import useTitle from '../../../Usehook/Usetitle';

const Home = () => {
    // title
    useTitle('Home')
    return (
        <div>
            {/* hero area */}
            <section className="hero-area">
                <div className="hero-text text-center">
                    <h2>Rita Solomou</h2>
                    <p>PREMIUM TEMPLATE</p>
                </div>
            </section>

            {/* service area */}
            <ServiceHome></ServiceHome>

          

            {/* offer area */}
            <section className="offer-area">
                <div className="title-area text-center">
                    <h2>What We Can Offer</h2>
                    <p>Porchetta dolor magna ipsum. Irure beef ribs chicken dolore, laboris filet mignon ribeye bacon swine pork <br /> loin commodo pork chop corned beef hamburger.</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/relationship.png" alt="" />
                                <h4>RELATIONSHIP</h4>
                                <p>A therapy that helps establish a more profound ground for healthy relationship.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/mental.png" alt="" />
                                <h4>MENTAL HEALTH</h4>
                                <p>Improve your focus, relieve stress and anxiety, and develop creativity.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/feelings.png" alt="" />
                                <h4>FEELINGS</h4>
                                <p>Achieve a better level of your well-being and the ability to manage feelings.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/meditation.png" alt="" />
                                <h4>MEDITATION</h4>
                                <p>A therapy that helps establish a more profound ground for healthy relationship.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/depression.png" alt="" />
                                <h4>RELATIONSHIP</h4>
                                <p>Learn how to deal with difficult emotions and feelings by using healthy strategies.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/conflicting.png" alt="" />
                                <h4>RELATIONSHIP</h4>
                                <p>A therapy that helps establish a more profound ground for healthy relationship.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/relationship.png" alt="" />
                                <h4>MIND GAMES</h4>
                                <p>It is crucial to understand how to prevent others from playing such games with you.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="single-offer">
                                <img className='offer-img' src="https://html.modernwebtemplates.com/psychologist/images/service-icons/mind.png" alt="" />
                                <h4>FEELINGS</h4>
                                <p>Achieve a better level of your well-being and the ability to manage feelings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Welcome  area */}
            <section className='welcome-area'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 image-wel">
                            <div className="welcome-image">

                                <img src="https://html.modernwebtemplates.com/psychologist/images/person.png" alt="" />

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
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