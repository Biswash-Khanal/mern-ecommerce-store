//Add New Address: /api/address/add

import Address from "../models/Address.js";

export const addAddress = async (req, res) => {
	try {
		const { address, userId } = req.body;
		await Address.create({ ...address, userId });
		res.json({ success: true, message: "New Address was Added Successfully!" });
	} catch (error) {
		console.log(error.message);
		res.json({ success: false, message: error.message });
	}
};

//Get Address : /api/address/GET

export const getAddress = async (req, res) => {
	try {
		const  {userId}  = req.body;
		const addresses = await Address.find({ userId });

		res.json({ success: true, addresses });
	} catch (error) {
		console.log(error.message);
		res.json({ success: false, message: error.message });
	}
};
