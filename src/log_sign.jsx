import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import web_login from "../src/img/resting.svg"
import Login from './login.jsx';
import Signup from './signup.jsx';
import Dashboard from './dashboard.jsx';
import Fire from './config/fire.jsx';




class LogSign extends Component{



render(){
	return (
		<>
		<section id="header_logsign" className="d-flex align-items-center justify-content-center p-5">
			<div className="container-fluid nav_bg">
			<div className="row box_main p-5">
				<div className="col-10 mx-auto">

				<h1>Hi there, <strong>Welcome</strong></h1>

					<div className="row">
					<div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
						<Login/>
						<h4 className="mt-3">New user? <NavLink id="sign_btn" to="/signup">Create account</NavLink></h4>
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
		);
}

};

export default LogSign;