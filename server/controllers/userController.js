import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register User: /api/user/register
export const register = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res.json({
				success: false,
				message: "Missing Registration Details!",
			});
		}

		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.json({ success: false, message: "User Already Exists!" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({ name, email, password: hashedPassword });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});

		res.cookie("token", token, {
			httpOnly: true, //prevents js to access cookie
			secure: process.env.NODE_ENV === "production", //use secure cookies in production
			sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
			maxAge: 7 * 24 * 60 * 1000, //cookie exp time (ms)
		});

		return res.json({
			success: true,
			user: { email: user.email, name: user.name },
		});
	} catch (error) {
		res.json({ success: false, message: error.message });
		console.log(error.message);
	}
};

//Login User: /api/user/login

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.json({
				success: false,
				message: "Both E-mail and Password are Required for Logging In!",
			});
		}
		const user = await User.findOne({ email });

		if (!user) {
			return res.json({
				success: false,
				message:
					"Incorrect E-mail or Password! Please Enter the Correct Details!",
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.json({
				success: false,
				message:
					"Incorrect E-mail or Password! Please Enter the Correct Details!",
			});
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});

		res.cookie("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
			maxAge: 7 * 24 * 60 * 1000,
		});

		return res.json({
			success: true,
			user: { email: user.email, name: user.name },
		});
	} catch (error) {
		console.log(error.message);
		res.json({ success: false, message: error.message });
	}
};

//Check Authorization : /api/user/is-auth

export const isAuth = async (req, res) => {
	try {
		const { userId } = req.body;
		const user = await User.findById(userId).select("-password");
		return res.json({ success: true, user });
	} catch (error) {
		console.log(error.message);
		res.json({ success: false, message1: error.message, message2:"test" });
	}
};

//Logout User: /api/user/logout

export const logout = async (req, res) => {
	try {
		res.clearCookie("token", {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
		});
		res.json({ success: true, message: "Logged Out Successfully!" });
	} catch (error) {
		console.log(error.message);
		res.json({ success: false, message: error.message });
	}
};
