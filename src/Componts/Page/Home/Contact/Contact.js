import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <section id="contact1" class="contact p-0" data-aos="fade-up" data-aos-duration="2000">
                <div class="container-fluid col-padding-0">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <div class="contact__banner align-v-h bg-overlay bg-img" >

                                <div class="heading text-center">
                                    <div class="heading__shape heading__shape-white"></div>
                                    <h2 class="heading__title color-white">Need Help?!! <br/> Don’t Hesitate To Ask</h2>
                                    <div class="divider__line divider__white"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6 bg-gray">
                            <div class="inner-padding">
                                <div class="heading">
                                    <h2 class="heading__title lh-1 mb-50">Write To Us</h2>
                                </div>
                                <form method="post" action="assets/php/contact.php" id="contactForm" novalidate="novalidate">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Name" id="contact-name" name="contact-name" required="" aria-required="true"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-6">
                                            <div class="form-group"><input type="email" class="form-control" placeholder="Email" id="contact-email" name="contact-email" required="" aria-required="true"/></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6 col-md-6 col-lg-6">
                                            <div class="form-group"><input type="text" class="form-control" placeholder="Phone" id="contact-Phone" name="contact-phone" required="" aria-required="true"/></div>
                                        </div>
                                        <div class="col-sm-6 col-md-6 col-lg-6">
                                            <div class="form-group"><input type="text" class="form-control" placeholder="Subject" id="contact-subject" name="contact-subject" required="" aria-required="true"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div class="form-group mb-30"><textarea class="form-control" placeholder="Message" id="contact-messgae" name="contact-messgae" required="" aria-required="true"></textarea></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <button type="submit" class=" btn__rounded btn__primary btn__hover3">Send Message</button>
                                        </div>
                                        <div class="contact-result"></div>
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