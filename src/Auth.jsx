import React, { useEffect, useState } from "react";
import Fire from "./config/fire.jsx";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		Fire.auth().onAuthStateChanged(setCurrentUser);
	}, []);

	return(
		<AuthContext.Provider
		value={{
			currentUser
		}}
		>
		{children}
		</AuthContext.Provider>
		);
};