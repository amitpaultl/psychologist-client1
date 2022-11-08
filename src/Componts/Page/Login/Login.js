import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthProvider } from '../../Context/AuthContext';
const Login = () => {
    // contex api
    const { loginemail,googleLogin } = useContext(AuthProvider);

    // location
    const location = useLocation();

    // location navigete
    const from = location.state?.from?.pathname || '/';

    // use navigate
    const navigate = useNavigate()



    // email handaler
    const handaleremail = (e) => {
        e.preventDefault();
        const common = e.target;
        const email = common.email.value;
        const password = common.password.value;
        
        // login email
        loginemail(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // navigate('/');
                navigate(from,{replace:true})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    // google login 
    const googlelogin=()=>{
        googleLogin()
        navigate(from,{replace:true})
    }

   

    return (
        <div>
            <div className="login-form">
                <div className='container'>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="sing-title login-p">
                                <h2><span className='text-tran'>WELCOME</span> TO PSYCHOLOGIST </h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-login">
                                <div className="singForm">
                                    <div className="title-login text-center">
                                        <h2>PSYCHOLOGIST</h2>
                                        <p>Login</p>
                                    </div>
                                    <form onSubmit={handaleremail}>
                                        <div className="input-form">
                                            <input type="email" name='email' placeholder='Email Address' />
                                        </div>
                                        <div className="input-form">
                                            <input type="password" name='password' placeholder='Password' />
                                        </div>
                                        <button className='submit' type='submit'>REGISTER</button>
                                    </form>
                                    <div className="forget">
                                        <Link>Forget Password</Link>
                                    </div>

                                    <div className="social-login">
                                        <button  onClick={googlelogin}><FaGoogle></FaGoogle><span className='ms-3'>GOOGLE SING UP</span></button>
                                    </div>

                                    <div className="forget">
                                        <Link to={'/singup'}>Create account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;