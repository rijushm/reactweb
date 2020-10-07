import React from "react";
import {NavLink} from 'react-router-dom';
import web from "../src/img/startup.svg";
import Fire from './config/fire.jsx';


class CreatePro extends React.Component{

	logout(){

		}

render(){
	return (
		<>
		
		<section id="header" className="container">

			<div className="row">


				<div className="col-sm-6 pt-5 pt-lg-0">
						<img src={web} className="img-fluid w-50 animated" alt="Home img" />
					</div>				



					<div className="col-sm-6 pt-5">

						<h1>Create your <strong className="my_name">Profile</strong> </h1>
					<label>Full Name</label>
		<input className="form-control mb-3" name="name" id="name" type="text" placeholder="Full name" />
		<label>Phone</label>
		<input className="form-control mb-3" name="phone" id="phone" type="number" placeholder="Phone number" />
		<label>Profession</label>
		<input className="form-control mb-3" name="prof" id="prof" type="text" placeholder="Profession" />
		<label>Project 1</label>
		<input className="form-control mb-3" name="project1" id="project1" type="text" placeholder="Enter your project link" />
		<label>Project 2</label>
		<input className="form-control mb-3" name="project2" id="project2" type="text" placeholder="Enter your project link" />
		<label>Project 3</label>
		<input className="form-control mb-3" name="project3" id="project3" type="text" placeholder="Enter your project link" />

			<div className=" text-center mt-4"><h4 className="py-2" id="createpro_btn">SUBMIT</h4></div>
				<div className=" text-center mt-4"><h5 className="py-2" id="logout_btn" onClick={() => Fire.auth().signOut()}>LOG OUT</h5></div>
				</div>
			</div>
         
							
		</section>
		</>
		);

		
};
}

export default CreatePro;