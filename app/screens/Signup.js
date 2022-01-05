import React, { useState } from "react";
import { Button, InputField, ErrorMessage, Screen } from "../components";
import Firebase from "../config/firebase";

const auth = Firebase.auth();

const Signup = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVisibility, setPasswordVisibility] = useState(true);
	const [rightIcon, setRightIcon] = useState("eye");
	const [signupError, setSignupError] = useState("");

	const handlePasswordVisibility = () => {
		if (rightIcon === "eye") {
			setRightIcon("eye-off");
			setPasswordVisibility(!passwordVisibility);
		} else if (rightIcon === "eye-off") {
			setRightIcon("eye");
			setPasswordVisibility(!passwordVisibility);
		}
	};

	const onHandleSignup = async () => {
		try {
			if (email !== "" && password !== "") {
				await auth.createUserWithEmailAndPassword(email, password);
			}
		} catch (error) {
			setSignupError(error.message);
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
			{signupError ? (
				<ErrorMessage error={signupError} visible={true} />
			) : null}
			<Button onPress={onHandleSignup} title="Signup" />
			<Button
				onPress={() => navigation.navigate("Login")}
				title="Login"
			/>
		</Screen>
	);
};

export default Signup;
