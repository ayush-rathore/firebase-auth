import React, { useState } from "react";

import { Button, InputField, ErrorMessage, Screen } from "../components";

import Firebase from "../config/Firebase";

const auth = Firebase.auth();

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVisibility, setPasswordVisibility] = useState(true);
	const [rightIcon, setRightIcon] = useState("eye");
	const [loginError, setLoginError] = useState("");

	const handlePasswordVisibility = () => {
		if (rightIcon == "eye") {
			setRightIcon("eye-off");
			setPasswordVisibility(!passwordVisibility);
		} else if (rightIcon == "eye-off") {
			setRightIcon("eye");
			setPasswordVisibility(!passwordVisibility);
		}
	};

	const onLogin = async () => {
		try {
			if (email !== "" && password !== "")
				await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			setLoginError(error.message);
		}
	};

	return (
		<Screen>
			<InputField
				inputStyle={{
					fontSize: 14,
				}}
				containerStyle={{
					backgroundColor: "#fff",
					marginBottom: 20,
				}}
				leftIcon="email"
				placeholder="Enter email"
				autoCapitalize="none"
				keyboardType="email-address"
				textContentType="emailAddress"
				autoFocus={true}
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>
			<InputField
				inputStyle={{
					fontSize: 14,
				}}
				containerStyle={{
					backgroundColor: "#fff",
					marginBottom: 20,
				}}
				leftIcon="lock"
				placeholder="Enter password"
				autoCapitalize="none"
				autoCorrect={false}
				secureTextEntry={passwordVisibility}
				textContentType="password"
				rightIcon={rightIcon}
				value={password}
				onChangeText={(text) => setPassword(text)}
				handlePasswordVisibility={handlePasswordVisibility}
			/>
			{loginError ? (
				<ErrorMessage error={loginError} visible={true} />
			) : null}
			<Button onPress={onLogin} title="Login" />
			<Button
				onPress={() => navigation.navigate("Signup")}
				title="Signup"
			/>
		</Screen>
	);
};

export default Login;
