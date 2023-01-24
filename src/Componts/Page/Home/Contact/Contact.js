import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <section id="contact1" className="contact p-0" data-aos="fade-up" data-aos-duration="2000">
                <div className="container-fluid col-padding-0">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="contact__banner align-v-h bg-overlay bg-img" >

                                <div className="heading text-center">
                                    <div className="heading__shape heading__shape-white"></div>
                                    <h2 className="heading__title color-white">Need Help?!! <br/> Don’t Hesitate To Ask</h2>
                                    <div className="divider__line divider__white"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 bg-gray">
                            <div className="inner-padding">
                                <div className="heading">
                                    <h2 className="heading__title lh-1 mb-50">Write To Us</h2>
                                </div>
                                <form method="post" action="assets/php/contact.php" id="contactForm" noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name" id="contact-name" name="contact-name" required="" aria-required="true"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><input type="email" className="form-control" placeholder="Email" id="contact-email" name="contact-email" required="" aria-required="true"/></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><input type="text" className="form-control" placeholder="Phone" id="contact-Phone" name="contact-phone" required="" aria-required="true"/></div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><input type="text" className="form-control" placeholder="Subject" id="contact-subject" name="contact-subject" required="" aria-required="true"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group mb-30"><textarea className="form-control" placeholder="Message" id="contact-messgae" name="contact-messgae" required="" aria-required="true"></textarea></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <button type="submit" className=" btn__rounded btn__primary btn__hover3">Send Message</button>
                                        </div>
                                        <div className="contact-result"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;