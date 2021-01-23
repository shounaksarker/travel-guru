import React, { useContext } from 'react';
import { DataContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button, Form } from 'react-bootstrap';
import Menubar from '../Menubar/Menubar';
import './login.css';
import fb from '../../Img/Icon/fb.png';
import google from '../../Img/Icon/google.png';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [, , user, setUser, oldUser, setOldUser] = useContext(DataContext);

    // for private route
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // firebase initialization
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // ------------------- Google Sign In ------------------- \\

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoUrl } = result.user;
                const userInfo = {
                    isSignIn: true,
                    fName: displayName,
                    email: email,
                    photo: photoUrl
                }
                setUser(userInfo);
                history.replace(from);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log('err code : ', errorCode, 'err msg : ', errorMessage, 'err email: ', email);
            });
    };

    // ------------------- Facebook Sign In ------------------- \\

    const handleFacebookSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoUrl } = result.user
                const userInfo = {
                    isSignIn: true,
                    fName: displayName,
                    email: email,
                    photo: photoUrl
                }
                setUser(userInfo);
                history.replace(from);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log('err code : ', errorCode, 'err msg : ', errorMessage, 'err email: ', email);
            });
    };

    // ---------------- Email password Sign In ---------------- \\

    const handleEmailSignin = () => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const userInfo = {
                    isSignIn: true,
                    success: true,
                    fName: user.fName,
                    lName: user.lName,
                    email: user.email,
                    photo: user.photo
                }
                setUser(userInfo);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('code: ', errorCode, 'message : ', errorMessage);
                document.getElementById('login').innerHTML = errorMessage;
            });
    };

    // ----------------------- Sign up ----------------------- \\

    const handleSignUp = () =>{
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const userInfo = { ...user };
                    userInfo.error = ''
                    userInfo.success = true;
                    userInfo.isSignIn = true;
                    setUser(userInfo);
                    updateUserInfo(user.fName + '' + user.lName);
                    history.replace(from);
                })
                .catch((error) => {
                    const userInfo = { ...user };
                    userInfo.success = false;
                    userInfo.error = error.message;
                    setUser(userInfo);
                });
    }

    // ---------------------- Sign out ( used is in menubar component )---------------------- \\

    // export const signOut = () => {
    //    return firebase.auth().signOut()
    //         .then(res => {
    //             const userInfo = {
    //                 isSignIn: false,
    //                 fName: '',
    //                 lName: '',
    //                 email: '',
    //                 photo: ''
    //             }
    //              setUser(userInfo);
    //        
    //             setOldUser(false);
    //         })
    // }

    // ------------------- Auth form submit ------------------- \\

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.email && user.password && !oldUser) {
            handleSignUp();
        }
        if (user.email && user.password && oldUser) {
            handleEmailSignin();
        };
    }

    // ------------------- Update user info ------------------- \\

    const updateUserInfo = (name) => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        })
            .then(function () {
                console.log('username update successfully');
            })
            .catch(function (error) {
                console.log(error.message)
            });
    }


    // ------------------- Form Handle Blur ------------------- \\

    const handleBlur = (e) => {
        let checkValid = true;

        if (e.target.type === 'email') {
            checkValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.type === 'password') {
            checkValid = e.target.value.length > 5;
        }
        if (checkValid) {
            const oldUserInfo = { ...user };
            oldUserInfo[e.target.type] = e.target.value;
            setUser(oldUserInfo);
        }
    }

    // ---------------- Sign in / sign up toggle ---------------- \\

    const toggle = () => {
        setOldUser(!oldUser)
    }


    return (
        <div className="containerr">
            <Menubar filter={0} color='black'></Menubar>
            <div className="auth-form">
                {
                    oldUser ?
                        <>
                            { /* ------------- Sign In Form ------------- */}

                            <h3>Login {user.success && <span>successful</span>} </h3> <br />
                            <p id="login"></p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="auth-form-group" controlId="formBasicEmail">

                                    <Form.Control className='auth-input' onBlur={handleBlur} type="email" placeholder="email" />
                                </Form.Group>

                                <Form.Group className="auth-form-group" controlId="formBasicPassword">
                                    <Form.Control className='auth-input' onBlur={handleBlur} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="auth-form-group" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button className="submit-Btn" type="submit">
                                    Login
                                </Button>

                                <h6>Don't have an account? <span onClick={toggle}> Create an account </span> </h6>
                            </Form>
                        </>
                        :
                        <>
                            { /* ------------- Sign Up Form ------------- */}

                            <h3>Create an account {user.success && <span>successful</span>} </h3> <br />

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="auth-form-group" controlId="formBasicFname">
                                    <Form.Control className='auth-input' onBlur={(e) => setUser({ ...user, fName: e.target.value })} type="name" placeholder="First Name" required />
                                </Form.Group>

                                <Form.Group className="auth-form-group" controlId="formBasicLname">
                                    <Form.Control className='auth-input' onBlur={(e) => setUser({ ...user, lName: e.target.value })} type="name" placeholder="Last Name" />
                                </Form.Group>

                                <Form.Group className="auth-form-group" controlId="formBasicEmail">

                                    <Form.Control className='auth-input' onBlur={handleBlur} type="email" placeholder="Username or Email" />
                                </Form.Group>

                                <Form.Group className="auth-form-group" controlId="formBasicPassword">
                                    <Form.Control className='auth-input' onBlur={handleBlur} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="auth-form-group" controlId="formBasicConfirmPassword">
                                    <Form.Control className='auth-input' onBlur={handleBlur} type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <Button className="submit-Btn" type="submit">
                                    Create an account
                                </Button>

                                {user.error && <p>{user.error}</p>}
                            </Form>

                            <h6>Already have an account? <span onClick={toggle}> Log in </span> </h6>
                        </>
                }
            </div>
            { /* ------------- Social Media login ------------- */ }

            <div className="social-login">
                <br />
                <h5>OR</h5>
                <div className="social-content" onClick={handleFacebookSignIn}>
                    <img src={fb} alt='fb' />
                    <h6>Continue with Faceebook</h6>
                </div>
                <br />
                <div className="social-content" onClick={handleGoogleSignIn}>
                    <img src={google} alt='fb' />
                    <h6>Continue with google</h6>
                </div>
            </div>

        </div>
    );
};

export default Login;