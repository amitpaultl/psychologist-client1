import React from 'react';
import useTitle from '../../Usehook/Usetitle';
import './Blog.css'

const Blog = () => {
        //title
        useTitle('Blog')
    return (
        <div className='blog-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="blog-page">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTegyxDGzAclv1CLItM-Hwf_uwT1pJJmyBw&usqp=CAU" alt="" />
                            <div className="blog-text">
                                <h2>Difference between sql and nosql</h2>
                                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                                <p>There are five practical differences between SQL and NoSQL:
                                    <br />
                                    1 Language<br />
                                    2 Scalability<br />
                                    3 Structure<br />
                                    4 Properties<br />
                                    5 Support and communities</p>
                            </div>
                        </div>
                        <div className="blog-page">
                            <img src="https://www.appknox.com/hs-fs/hubfs/JWT.jpg?width=1999&name=JWT.jpg" alt="" />
                            <div className="blog-text">
                                <h2>What is jwt ? how does jwt work</h2>
                                <p>JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.</p>
                                <br />
                                <p>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                            </div>
                        </div>
                        <div className="blog-page">
                            <img src="https://d2o2utebsixu4k.cloudfront.net/media/images/blogs/listing_image/8a49bb3b-8511-43d8-8422-0571a4afd256.png" alt="" />
                            <div className="blog-text">
                                <h2>What is the difference between javascript and node.js?</h2>
                                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
                            </div>
                        </div>
                        <div className="blog-page">
                            <img src="https://miro.medium.com/max/1200/1*9lmHM-CypCHEOtNd_dfRRw.png" alt="" />
                            <div className="blog-text">
                                <h2>How does node js handle multiple requests same time</h2>
                                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;