import React, { useContext } from 'react';
import logo from '../../Logo.png';
import "./Menubar.css"
import { Form, FormControl, Nav, Navbar, } from 'react-bootstrap';
import { DataContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { Link } from 'react-router-dom';

const Menubar = (props) => {
    const [, , user, setUser, , setOldUser] = useContext(DataContext);


    // ---- sign out ---- \\
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const signOut = () => {
        return firebase.auth().signOut()
            .then(res => {
                const userInfo = {
                    isSignIn: false,
                    fName: '',
                    lName: '',
                    email: '',
                    photo: ''
                }
                setUser(userInfo);
                setOldUser(false);
            })
    }

    // ---- internal css start ---- \\
    const logostyle = {
        maxWidth: '150px',
        filter: `brightness(${props.filter})`
    }

    const menuA = {
        color: `${props.color}`
    };
    // ---- internal css end ---- \\

    return (
        <Navbar className='nav-bar' expand="lg">
            <Navbar.Brand href="/"><img style={logostyle} src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className="searchbar">
                    <FormControl type="text" placeholder="&#x1F50D; Search your destination" className="searchbox mr-sm-2" />
                </Form>

                <Nav className="menu">
                    <Link style={menuA} to="/">Home</Link>
                    <Link style={menuA} to="/destination">Destination</Link>
                    <Link style={menuA} to="/blog">Blog</Link>
                    <Link style={menuA} to="/contact">Contact</Link>
                    {
                        user.isSignIn ?
                            <Link style={menuA} onClick={signOut}>
                                {
                                    user.fName ? `${user.fName}` : 'logout'
                                }
                            </Link> :
                            <Link style={menuA} to="/login">Login</Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menubar;