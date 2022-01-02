// Error message component

import React from "react";
import { StyleSheet, Text } from "react-native";

function ErrorMessage({ error, visible }) {
	if (!visible || !error) return null;
	return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
	error: {
		color: "red",
		fontSize: 15,
	},
});
export default ErrorMessage;
