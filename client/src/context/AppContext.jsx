import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

	const currency = import.meta.VITE_CURRENCY;
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [isSeller, setIsSeller] = useState(false);
	const [showUserLogin, setShowUserLogin] = useState(false);
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);

//Fetch all products function
	const fetchProducts = async()=>{
		setProducts(dummyProducts)
	}

	//Add products to cart function
	const addToCart=(itemID)=>{
		console.log("test3")
		toast.success("Added To Cart!")
		let cartData = structuredClone(cartItems);

		if(cartData[itemID]){
			cartData[itemID] +=1;
		}
		else{
			cartData[itemID] -=1;
		}
		setCartItems(cartData);
		toast.success("Added To Cart!")
	}

		//Update Cart Quantity
	const updateCartItem=(itemID, quantity)=>{
		let cartData = structuredClone(cartItems);
		cartData[itemID] = quantity;
		setCartItems(cartData)
		toast.success("Cart Updated")
	}


		//Remove products to cart function
	const removeFromCart=(itemID)=>{
		let cartData = structuredClone(cartItems);

		if(cartData[itemID]){
			cartData[itemID] -=1;
			if(cartData[itemID]===0){
				delete cartData[itemID]
			}
		}

		toast.success("Removed From Cart!")
		setCartItems(cartData);
	}



	useEffect(()=>{
		fetchProducts()
	}, [])
	const value = { navigate, user, setUser, setIsSeller, isSeller, showUserLogin, setShowUserLogin, products, currency, addToCart, updateCartItem, removeFromCart, cartItems };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
	return useContext(AppContext);
};
