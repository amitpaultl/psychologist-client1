import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import './Header.css'
const Header = () => {
    const { logOut, user } = useContext(AuthProvider)


    // log out
    const logout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><Link className='logo' to={'/'}>Psychologist</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >


                        </Nav>
                        <div className="d-flex">
                            <Nav
                                className="me-auto my-2 menu-area"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav><NavLink className={({ isActive }) =>
                                    isActive ? 'active' : undefined
                                } to={'/'}>Home</NavLink> </Nav>
                                <Nav><NavLink to={'/blog'}>Blog</NavLink></Nav>
                                <Nav><NavLink to={'/dasbord'}>Add Service</NavLink></Nav>

                                {
                                    user ? <>
                                    <Nav><NavLink to={'/review'}>My Review</NavLink></Nav>
                                    <Nav><NavLink onClick={logout}>Logout</NavLink></Nav>
                                     </>
                                        :
                                        <>
                                            <Nav><NavLink to={'/login'}>Login</NavLink></Nav>
                                            <Nav><NavLink to={'/singup'}>Sing Up</NavLink></Nav>
                                        </>
                                }



                            </Nav>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;