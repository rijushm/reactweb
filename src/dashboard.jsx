import React from "react";
import {NavLink} from 'react-router-dom';
import web from "../src/img/startup.svg";
import Fire from './config/fire.jsx';


class Dashboard extends React.Component{

	logout(){

		}

render(){
	return (
		<>
		
		<section id="header" className="d-flex align-items-center justify-content-center">
			<div className="container-fluid nav_bg">
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="row">
					<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
						<h1>You are successfuly <strong className="my_name">Logged In</strong> </h1>
						<h2 className="my-3">You are Awesome!</h2>

						<h2 className="my-3 my_name"><NavLink to="/profile" exact>Create profile</NavLink></h2>
						<div className=" col-8 row d-flex align-items-center justify-content-left">
						<div className="col-lg-6 text-center mt-4"><h4 className="py-1" id="logout_btn" onClick={() => Fire.auth().signOut()}>Log out</h4></div>
							</div>
					</div>

					<div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header_img">
						<img src={web} className="img-fluid animated" alt="Home img" />
					</div>
					</div>
				</div>
			</div>
		</div>
		</section>
		</>
		);

		
};
}

export default Dashboard;