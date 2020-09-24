import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import './Login.css'
import logo from '../../image/logo2.png'
import * as firebase from "firebase/app";
import { createLoginFreamwork, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailPassword, signInWithEmailPassword } from './LoginInfo';

import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import facebook from '../../image/ICON/fb.png'
import google from '../../image/ICON/google.png'

firebase.initializeApp(firebaseConfig);

const Login = (props) => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    // toggle form
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
        photo: "",
        email: "",
        error: ""
    })
    createLoginFreamwork();

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // sign in with google 
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    // sign Out
    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false)
            })
    }
    // sign in with facebook
    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    // submit handler
    const handleSubmitted = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, false)
                    console.log(res.error)
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailPassword(user.email, user.password)
                .then(res => {
                    setUser(res)
                    setLoggedInUser(res)
                    history.replace(from);
                })
        }
        // e.preventDefault();
    }
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from)
        }
    }
    // handle change input
    let isformValid = true;

    const handleInput = (event) => {
        if (event.target.name === "email") {
            isformValid = (/\S+@\S+\.\S+/).test(event.target.value);
        }
        if (event.target.name === "password") {
            const passLength = event.target.value.length > 8;
            const passWord = /\d{1}/.test(event.target.value);
            isformValid = passLength && passWord;
        }
        if (isformValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }

    }

    return (
        <>
            <section className="form-banner">
                <div className="container">
                    <div className="user-form d-flex justify-content-center align-items-center">
                        <div className="col-md-5 mt-5 pt-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <img src={logo} alt="" />
                                {
                                    newUser &&
                                    <>
                                        <input onBlur={handleInput} type="text" name="name" placeholder="Name" ref={register({ required: true })} />
                                        <span className="error">{errors.name && "Name is required"}</span>
                                        <input onBlur={handleInput} type="email" name="email" placeholder="Email" ref={register({ required: true })} />
                                        <span className="error"> {errors.email && "Email is required"}</span>
                                        <input onBlur={handleInput} type="password" name="password" placeholder="Password" ref={register({ required: true })} />
                                        <span className="error">  {errors.password && "Password is required"}</span>
                                        <input onBlur={handleInput} type="password" name="ConfirmPassword" placeholder="Confirm Password" ref={register({ required: true })} />
                                        <span className="error"> {errors.ConfirmPassword && "Confirm Password is required"}</span>
                                    </>
                                }
                                {
                                    !newUser &&
                                    <>
                                        <input onBlur={handleInput} type="email" name="email" placeholder="Email" ref={register({ required: true })} />
                                        <span className="error"> {errors.email && "Email is required"}</span>
                                        <input onBlur={handleInput} type="password" name="password" placeholder="Password" ref={register({ required: true })} />
                                        <span className="error">  {errors.password && "Password is required"}</span>

                                    </>
                                }
                                <input className="submit-btn" type="submit" onClick={() => handleSubmitted()} value={newUser ? 'Sign up' : 'Sign In'} />
                                {
                                    newUser && <p>Already have an account ? <span className="user-toggle" onClick={() => setNewUser(!newUser)}> Login </span> </p>
                                }
                                {
                                    !newUser && <p>Don't have an account ? <span className="user-toggle" onClick={() => setNewUser(!newUser)}> Create an account</span> </p>
                                }
                            </form>
                            <div className="other-signIn-method">
                            <div className="facebook">
                                <img src={facebook} className="float-left" alt="" />
                                <div className="btn text-center">
                                    <button onClick={fbSignIn}>Continue with facebook</button>
                                </div>
                            </div>
                            <div className="google">
                                <img className="float-left" src={google} alt="" />
                                <div className="btn text-center">
                                    <button onClick={googleSignIn}> Continue with google</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;