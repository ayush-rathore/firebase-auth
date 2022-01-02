// Basic screen component for displaying other components

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

function Screen({ children, style }) {
	return (
		<View style={[{ paddingTop: 10, flex: 1 }, style]}>
			<StatusBar style="auto" />
			{children}
		</View>
	);
}

export default Screen;
