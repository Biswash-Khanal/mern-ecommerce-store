import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

const SellerLogin = () => {
	const { isSeller, setIsSeller, navigate } = useAppContext();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		if (isSeller) {
			navigate("/seller");
		}
	}, [isSeller]);

	const [state, setState] = React.useState("login");
	const [name, setName] = React.useState("");

	const { setShowUserLogin, setUser } = useAppContext();

	const onSubmitHandler = async (event) => {
		event.preventDefault();

		setUser({
			email: "Test@test.com",
			name: "asdsad",
		});

		setShowUserLogin(false);
	};
	return (
		!isSeller && (
			<form
				onSubmit={onSubmitHandler}
				onClick={(e) => e.stopPropagation()}
				className="min-h-screen flex items-center text-sm text-gray-600"
			>
				<div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-2-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
					<p className="text-2xl font-medium m-auto">
						<span className="text-primary">seller</span>Login
					</p>

                    <div className="w-full">
                        <p>Email</p>
                        <input type="email" placeholder="Enter your Email" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" required/>
                    </div>
                    <div className="w-full">
                        <p>Password</p>
                        <input type="password" placeholder="Enter your Password" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" required/>
                    </div>

                        <button className="bg-primary text-white hover:bg-primary-dull w-full py-2 rounded-md cursor-pointer active:bg-primary/50">Login</button>

				</div>
			</form>
		)
	);
};

export default SellerLogin;
