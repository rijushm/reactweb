import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home  from "./home.jsx"
import Contact  from "./contact.jsx"
import Service  from "./service.jsx"
import About  from "./about.jsx"
import LogSign  from "./log_sign.jsx"
import Signup  from "./signup.jsx"
import Dashboard  from "./dashboard.jsx"
import CreatePro  from "./createPro.jsx"
import Headerbar  from "./headerbar.jsx"
import Footerbar  from "./footerbar.jsx"
import {Switch,Route,Redirect} from "react-router-dom";
import Fire from './config/fire.jsx';
import {AuthProvider} from './Auth.jsx'
import PrivateRoute from './PrivateRoute.jsx'
 import firebase from 'firebase';
 import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'


const App = () => {

	return (
		<>
		<AuthProvider>
		<Headerbar/>
		<Switch>
		<Route exact path="/" component={Home}/>
		<Route exact path="/about" component={About}/>
		<Route exact path="/service" component={Service}/>
		<Route exact path="/contact" component={Contact}/>
		<Route exact path="/login" component={LogSign}/>
		<Route exact path="/signup" component={Signup}/>
		<PrivateRoute exact path="/dashboard" component={Dashboard}/>
		<PrivateRoute exact path="/profile" component={CreatePro}/>
		<Redirect to="/"/>
		</Switch>
		<Footerbar/>
		</AuthProvider>
		</>
		);
};

export default App;