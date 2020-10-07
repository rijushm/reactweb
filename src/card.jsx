import React from "react";
import {NavLink} from 'react-router-dom';


const Card = (props) => {
	return (
	               <div className="single_card col-md-4 col-10 mx-auto">

							<div className="card">
						  <div className="view overlay">
						    <img className="card-img-top" src={props.imgsrc}
						      alt="..."/>
						    
						    <a href="#!">
						      <div className="mask rgba-white-slight"></div>
						    </a>
						  </div>

						  
						  <div className="card-body">

			
						    <h4 className="card-title font-weight-bold">{props.title}</h4>
		
						    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
						      content.</p>
				
						    <NavLink to="/" className="btn btn-primary">Get started</NavLink>

						  </div>

						</div>

			        </div>
		);
};

export default Card;
