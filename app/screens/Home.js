import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { IconButton } from "../components";
import Screen from "../components/Screen";
import Firebase from "../config/Firebase";

import User from "../context/User";

const auth = Firebase.auth();

const Home = () => {
	const { user } = User();

	const handleSignout = async () => {
		try {
			await auth.signOut();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Screen>
			<View styles={styles.container}>
				<Text>Welcome, {user.email}</Text>
				<IconButton name="logout" onPress={handleSignout} />
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

export default Home;
