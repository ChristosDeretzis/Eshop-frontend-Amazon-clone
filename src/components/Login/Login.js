import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../axios';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const SignIn = (e) => {
        e.preventDefault();
        console.log(email, password);

        const loginUser = {
            email: email,
            password: password
        }
        
        axios.post('/users/login', loginUser)
            .then((response) => {
               console.log(response.data.user);
        }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
                    alt="Amazon Logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <label>E-mail</label>
                    <input 
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type='submit' className="login__signInButton" onClick={SignIn}>Sign In</button>
                </form>

                <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                
                <button onClick={() => history.push("/signup")} type='submit' className="login__signUpButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login;