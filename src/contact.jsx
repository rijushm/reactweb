import React from "react";
import {NavLink} from 'react-router-dom';
import web from "../src/img/handshake.svg"


const contact = () => {
	return (
        <section id="header_contact" className="contact d-flex align-items-center justify-content-center">
			<div className="container-fluid nav_bg">
			<div className="row">
				<div className="col-10 mx-auto">

				<h1 className="pt-5">Feel free to <strong>Contact</strong></h1>

					<div className="row">

					<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

					<form className="">
          <div className="form-group row">
            <label className="col-form-label col-sm-4 col-md-3 col-lg-2" >Full name</label>
            <div className="input-group col-sm-8 col-md-9 col-lg-10">
              <span className="input-group-addon">
                <i className="fa fa-user"></i>
              </span>
              <input type="text" className="form-control" id="user-name" placeholder="Full name"/>
            </div>
          </div>
          
          <div className="form-group row">
            <label className="control-label col-sm-4 col-md-3 col-lg-2">E-mail</label>
            <div className="input-group col-sm-8 col-md-9 col-lg-10">
              <span className="input-group-addon">
                <i className="fa fa-envelope"></i>
              </span>
              <input type="email" className="form-control" id="email" placeholder="E-mail address"/>
            </div>
          </div>
          
          <div className="form-group row">
            <label className="control-label col-sm-4 col-md-3 col-lg-2">Теlephone</label>
            <div className="input-group col-sm-8 col-md-9 col-lg-10">
              <span className="input-group-addon">
                <i className="fa fa-phone"></i>
              </span>
              <input type="tel" className="form-control" id="number" placeholder="+1 88 555 5555"/>
            </div>
          </div>
          
          <div className="form-group row">
            <label className="control-label col-sm-4 col-md-3 col-lg-2">Message</label>
            <div className="input-group col-sm-8 col-md-9 col-lg-10">
              <span className="input-group-addon">
                <i className="fa fa-pencil"></i>
              </span>
              <textarea className="form-control" rows="3" placeholder="Enter your Message" id="message"></textarea> 
            </div>
          </div>
          <div className="mt-3">
          <NavLink to="/contact" id="text_submit" className="">SUBMIT</NavLink>
          </div>
          
        </form>
        </div>

					<div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header_img">
						<img src={web} className="img-fluid animated" alt="About img" />
					</div>
					</div>
				</div>
			</div>
		</div>
		</section>
		);
};

export default contact;

//  