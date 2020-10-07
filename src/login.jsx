import React, { useCallback, useContext } from "react";
import {NavLink} from 'react-router-dom';
import Fire from './config/fire.jsx';
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./Auth.jsx";
 import firebase from 'firebase';
 import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'


const Login = ({ history }) =>  {
	  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await Fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

	  const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/dashboard',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};


	  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

	return (
		<>
		<form onSubmit={handleLogin}>
		  <div className="mb-3">
		    <label className="form-label">Email address</label>
		    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
		    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
		  </div>
		  <div className="mb-3">
		    <label className="form-label">Password</label>
		    <input name="password" type="password" className="form-control" id="exampleInputPassword1"/>
		  </div>
		  <button type="submit" className="btn btn-primary">Login</button><br/><span>Or,</span>
		   <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
		</form>
		</>
		);
};


export default withRouter(Login);