import React from "react";

import { UserProvider } from "./app/context/UserContext";
import RootNav from "./app/navigation/RootNav";

const App = () => {
	return (
		<UserProvider>
			<RootNav />
		</UserProvider>
	);
};

export default App;
