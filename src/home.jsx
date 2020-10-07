import React from "react";
import {NavLink} from 'react-router-dom';
import web from "../src/img/startup.svg"

const Home = () => {
	return (
		<>
		<section id="header" className="d-flex align-items-center justify-content-center">
			<div className="container-fluid nav_bg">
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="row">
					<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
						<h1>Grow your business with <strong className="my_name">Riju Sharma</strong> </h1>
						<h2 className="my-3">We are the talented Developer making Websites & Apps</h2>
						<div className=" col-8 row d-flex align-items-center justify-content-left">
						<div className="col-lg-6 mt-4"><NavLink exact id="service_btn" to="/dashboard">Get Started</NavLink></div>
							<div className="col-lg-6 mt-4"><NavLink exact className="mx-auto" id="contact_btn" to="/contact">Get contact</NavLink></div>
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

export default Home;