import React, {useCallback} from "react";
import {NavLink} from 'react-router-dom';
import { withRouter } from "react-router";
import web_login from "../src/img/resting.svg"
import Login from './login.jsx';
import Fire from './config/fire.jsx';


const Signup = ({ history }) =>  {

	  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await Fire
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/dashboard");
    } catch (error) {
      alert(error);
    }
  }, [history]);


	return (
		<>
		<section id="header_logsign" className="d-flex align-items-center justify-content-center p-5">
			<div className="container-fluid nav_bg">
			<div className="row box_main p-5">
				<div className="col-10 mx-auto">

				<h1>Welcome to our <strong>Community</strong></h1>

					<div className="row">
					<div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
						<form  onSubmit={handleSignUp}>
							

							  <div className="mb-3">
							    <label  className="form-label">Email address</label>
							    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
							    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
							  </div>
							 
							  <div className="mb-3">
							    <label className="form-label">Password</label>
							    <input name="password" type="password" className="form-control" id="exampleInputPassword1"/>
							  </div>
							 
							  <button type="submit" className="btn btn-primary">Signup</button>
							</form>
						<h4 className="mt-3">Already have an account? <NavLink id="log_btn" to="/login">Login</NavLink></h4>
					</div>

					<div className="col-md-6 pt-3 pt-lg-0 order-1 order-lg-2 box_back">
						<img src={web_login} className="img-fluid animated" alt="Home img" />
					</div>
					</div>
				</div>
			</div>
		</div>
		</section>
		</>
		)
}


export default withRouter(Signup);