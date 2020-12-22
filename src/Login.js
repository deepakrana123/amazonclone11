import React,{useState} from 'react';
import './Login.css';
import {Link,useHistory} from "react-router-dom";

import {auth} from './firebase';

function Login() {
    const history=useHistory();
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const signIn=(e)=>{
		e.preventDefault();

		auth.signInWithEmailAndPassword(email,password)
		.then(auth=>{
			history.push('/')
		})
		.catch(error=>alert(error.message))
	}

	const registor=(e)=>{
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email,password)
		.then((auth)=>{
			console.log(auth);
			if(auth){
				history.pushState('/')
			}
		})
		.catch(error=> alert(error.message))
	}

	return (
		<div className="login">
		<Link to="/">
	    <img className="login_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt=""/>
		</Link>
	    <div className="login_conatiner">
	   <h1>Sign in</h1>
			    <form>
			    <h5>E-mail</h5>
			   <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
			    <h5>Password</h5>
				<input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
				<button type='submit' onClick={signIn}
				 className="login_signInButton">Sign In</button></form>
			      <p>
			  By singin-in you agree to the
			   AmzonCLone term and
			   conditions of the use sale .
			   Please see or privacy and stay inform
			    our cookies Notice and our Interset base service</p>
			 <button onClick={registor}
			 className="login_registerButton">Create your Account</button> 
			    </div>
		</div>
	)
}

export default Login
