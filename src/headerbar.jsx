import React from 'react';
import {NavLink} from 'react-router-dom';
import "./index.css";

const headerbar =() => {
	return(
		<div className="container-fluid nav_bg text-center">
			<div className="row">
				<div className="max-auto">
					<nav className="headernavbar navbar navbar-expand-lg navbar-light">
				  <div className="container-fluid">
				    <NavLink className="navbar-brand" exact to="/">Riju Sharma</NavLink>
				    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				      <span className="navbar-toggler-icon"></span>
				    </button>
				    <div className="collapse navbar-collapse" id="navbarSupportedContent">
				      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
				        <li className="nav-item">
				          <NavLink activeClassName="active_menu" className="nav-link navlink" aria-current="page" exact to="/">Home</NavLink>
				        </li>
				        <li className="nav-item">
				          <NavLink activeClassName="active_menu" className="nav-link navlink" exact to="/about">About</NavLink>
				        </li>
				        <li className="nav-item">
				          <NavLink activeClassName="active_menu" className="nav-link navlink" exact to="/service">Services</NavLink>
				        </li>
				        <li className="nav-item">
				          <NavLink activeClassName="active_menu" className="nav-link navlink" exact to="/contact">Contact</NavLink>
				        </li>
				        <li className="nav-item">
				          <NavLink activeClassName="active_menu" className="nav-link navlink" exact to="/login">Login</NavLink>
				        </li>
				      </ul>
				     
				    </div>
				  </div>
		        </nav>
				</div>
			</div>
		</div>
				
		);
		
};

export default headerbar;