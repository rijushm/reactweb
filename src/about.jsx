import React from "react";
import {NavLink} from 'react-router-dom';
import web from "../src/img/coding.svg"

const About = () => {
	return (
		<>
		<section id="header" className="about d-flex align-items-center justify-content-center">
			<div className="container-fluid nav_bg">
			<div className="row">
				<div className="col-10 mx-auto">
					<div className="row">
					<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
						<h1>It's all About <strong className="my_name">Me</strong> </h1>
						<h2 className="my-3">Hi, I am graduated in Electrical Engineering & a successful Web Developer as well
						as Android Developer</h2>
						<div className="mt-3">
							<NavLink exact id="about_btn" to="/service">My services</NavLink>
						</div>
					</div>

					<div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header_img">
						<img src={web} className="img-fluid animated" alt="About img" />
					</div>
					</div>
				</div>
			</div>
		</div>
		</section>
		</>
		);
};

export default About;