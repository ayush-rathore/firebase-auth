import { useContext } from "react";

const UserContext = createContext();

const User = () => {
	const { user, setUser } = useContext(UserContext);

	const login = (data) => {
		setUser(data);
	};

	const logout = () => {
		setUser(null);
	};

	return { user, login, logout };
};

export default User;