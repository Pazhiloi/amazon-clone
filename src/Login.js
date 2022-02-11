import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      history('/')
    })
    .catch(e => alert(e.message))
  }
  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((e) => alert(e.message));
  }
  return (
    <div className="login">
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>By signing-in you agree to Amazon's Conditions of Use and Sale</p>
        <button onClick={register} className="login__registerButton">Create Account</button>
      </div>
    </div>
  );
};

export default Login;
