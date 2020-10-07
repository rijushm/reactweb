import React from 'react';
import {NavLink} from 'react-router-dom';
import "./index.css";

const footerbar =() => {
	return(
		<div className="footer-copyright text-center mt-5">© 2020 Copyright:
    <NavLink id="footer_link" to="/"> Created by Riju Sharma</NavLink>
  </div>
				
		);
		
};

export default footerbar;