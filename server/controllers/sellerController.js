import jwt from "jsonwebtoken";

//login Seller: /api/seller/login

export const sellerLogin = async (req, res) => {
try {
    	const { email, password } = req.body;

	if (
		password === process.env.SELLER_PASSWORD &&
		email === process.env.SELLER_EMAIL
	) {
		const token = jwt.sign({ email }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});

		res.cookie("sellerToken", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: process.env.NODE_ENV === "Production" ? "none" : "strict",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});
		return res.json({ success: true, message: "logged in" });
	} else {
		return res.json({ success: false, message: "Invalid Credentials" });
	}
} catch (error) {
    console.log(error.message);
    res.json({success:false, message:error.message})
}
};
