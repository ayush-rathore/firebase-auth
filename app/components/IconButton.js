import React from "react";
import { AntDesign } from "@expo/vector-icons";

function IconButton({ name, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<AntDesign name={name} size={24} color="#ffffff" />
		</TouchableOpacity>
	);
}

export default IconButton;
