import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";

import Firebase from "../config/firebase";
import { UserContext } from "../contexts/UserContext";

import AuthNav from "./AuthNav";
import HomeNav from "./HomeNav";

const auth = Firebase.auth();

const RootNav = () => {
	const { user, setUser } = useContext(UserContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			try {
				await (user ? setUser(user) : setUser(null));
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		});
		return unsubscribe;
	}, []);

	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<NavigationContainer>
			{user ? <HomeNav /> : <AuthNav />}
		</NavigationContainer>
	);
};

export default RootNav;
