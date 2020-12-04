import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css';
import axios from '../../axios';

const SignUp = () => {
    const [Email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRetype, setPasswordRetype] = useState("");

    const SignUp = (e) => {
        e.preventDefault();

        const newUser = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: Email,
            password: password
        }

        if(password === passwordRetype) {
            axios.post('/users', newUser)
                .then((response) => {
                    console.log(response.data.user);
                }).catch((error) => {
                    console.log(error);
                }); 
        } else {
            console.log("the passwords do not match");
        }
    }


    return (
        <div className="signup">
            <Link to="/">
                <img 
                    className="signup__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
                    alt="Amazon logo"
                />
            </Link>

            <div className="signup__container">
                <h1>Create Account</h1>

                <form>
                <label>Username</label>
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label>First Name</label>
                    <input 
                        type="text" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label>Last Name</label>
                    <input 
                        type="text" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} 
                    />

                    <label>E-mail</label>
                    <input 
                        type='text' 
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input 
                        type='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}    
                    />

                    <label>Re-enter Password</label>
                    <input 
                        type='password' 
                        value={passwordRetype}
                        onChange={(e) => setPasswordRetype(e.target.value)}
                    />

                    <button 
                        type='submit' 
                        className="signUpButton"
                        onClick={SignUp}>Create your Amazon Account</button>
                </form>

                <p>
                    By signing-up you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <p>
                    Already Have an account? <Link to="/login">Login</Link>.
                </p>

            </div>

        </div>
    );
    
}

export default SignUp;