import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [isSeller, setIsSeller] = useState(null);

	const value = { navigate, user, setUser, setIsSeller, isSeller };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
	return useContext(AppContext);
};
