import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import './SingUp.css'
import { AuthProvider } from '../../Context/AuthContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Usehook/Usetitle';
import { setAuthtoken } from '../../utilities/SetAuthToken';

const SingUp = () => {
    // email sing up
    const {emailLogin,googlesingup,profile} = useContext(AuthProvider);

    // title 
    useTitle('Sing up')

    // email handaler
    const handaleremail = (e)=>{
        e.preventDefault();
        const common = e.target;
        const name = common.name.value;
        const email = common.email.value;
        const password = common.password.value;

        // email sing in
        emailhandaler(email,password,name)
        
        // form reset
        e.target.reset()
    }

    // email sing in
    const emailhandaler = (email,password,name)=>{
        emailLogin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            profile(name)
            console.log(user);
            // jwt
            setAuthtoken(user)
            toast.success('Successfully Sign Up')
            
        })
        .catch((error) => {
            toast.error('Sing Up Fall')
        });
    }

    // google sing in
    const googlelogin =()=>{

        googlesingup()
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            const currentUser = {
              email:user.email
            }
            fetch('https://psychol-server.vercel.app/jwt',{
                method: "POST",
                headers: {
                  "content-type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('Token-psy', data.token)
            })


            // setAuthtoken(user)



            
            toast.success('Successfully Sign Up')
          }).catch((error) => {
            // ...
            toast.error('Sing Up Fall')
          });
    }


    return (
        <div className="login-form">
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-12 col-xl-6">
                        <div className="sing-title">
                            <h2><span className='text-tran'>WELCOME</span> TO  PSYCHOLOGIST </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Ipsum has been the industry's standard dummy</p>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12 col-xl-6">
                        <div className="bg-login">
                            <div className="singForm">
                                <div className="title-login text-center">
                                    <h2>PSYCHOLOGIST</h2>
                                    <p>Create An Cccount</p>
                                </div>
                                <form onSubmit={handaleremail}>
                                    <div className="input-form">
                                        <input type="text" name='name' placeholder='Full Name' />
                                    </div>
                                    <div className="input-form">
                                        <input type="email" name='email' placeholder='Email Address' required />
                                    </div>
                                    <div className="input-form">
                                        <input type="password" name='password' placeholder='Password' required />
                                    </div>
                                    <button className='submit' type='submit'>REGISTER</button>
                                </form>

                                <div className="social-login">
                                    <button onClick={googlelogin}><FaGoogle></FaGoogle><span className='ms-3'>GOOGLE SING UP</span></button>
                                </div>

                                <div className="forget">
                                    <Link to={'/login'}>Have a account Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingUp;