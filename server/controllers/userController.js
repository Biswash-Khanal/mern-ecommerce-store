import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register User: /api/user/register
export const register = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res.json({ success: false, message: "missing details" });
		}

		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({ name, email, password: hashedPassword });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "7d"
		});

		res.cookie("token", token, {
			httpOnly: true, //prevents js to access cookie
			secure: process.env.NODE_ENV === "production", //use secure cookies in production
			sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
			maxAge: 7 * 24 * 60 * 1000,//cookie exp time (ms)
		});

		return res.json({
			success: true,
			user: { email: user.email, name: user.name },
		});
	} catch (error) {
		res.json({ success: false, message: error.message });
		console.log("ErrorMessage");
		console.log(error.message);
	}
};

//login user:/api/user/login

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.json({
				success: false,
				message: "Email and password are required",
			});
		}
		const registeredUser = await User.findOne({ email });

		if (!registeredUser) {
			return res.json({ success: false, message: "invalid email or password" });
		}

		const isMatch = await bcrypt.compare(password, registeredUser.password);

		if(!isMatch){
			return res.json({ success: false, message: "invalid email or password" });
		}

		const token = jwt.sign({ id: registeredUser._id }, process.env.JWT_SECRET, {
			expiresIn: "7d"
		});

		res.cookie("token", token, {
			httpOnly: true, //prevents js to access cookie
			secure: process.env.NODE_ENV === "production", //use secure cookies in production
			sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
			maxAge: 7 * 24 * 60 * 1000,//cookie exp time (ms)
		});

		return res.json({
			success: true,
			user: { email: registeredUser.email, name: registeredUser.name },
		});

	} catch (error) {
		console.log(error.message);
		res.json({ success: false, message: error.message });
	}
};
