import React, { useState } from "react";
import { assets } from "../assets/assets";


const InputField = ({type, placeholder, name, handleChange, address})=>(
    <input type={type}
            className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
            placeholder={placeholder}    
            onChange={handleChange}
            name={name}
            value={address[name]}
            required
    />
)

const AddAddress = () => {
    
    const [address, setAddress] = useState({
        firstname:"",
        lastname:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:"",
    })

const handleChange= (e)=>{
    const {name, value} = e.target;

    setAddress((prevAddress)=>({
        ...PrevAddress,
        [name]:value,
    }))
}

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

	return (
		<div className="mt-16 pb-16">
			<p className="text-2xl md:text-3xl justify-center content-center items-center flex gap-1  ">
				<span className="text-gray-500">Add Shipping </span>
				<span className="text-primary font-semibold">Address</span>
			</p>

        <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-5  mt-10">
            <div className="flex-1 max-w-md ">
                <form className="space-y-3 mt-6 text-sm" onSubmit={onSubmitHandler}>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField handleChange={handleChange} address={address} name="firstname" type="text" placeholder="First Name" />
                        <InputField handleChange={handleChange} address={address} name="lastname" type="text" placeholder="Last Name" />
                      </div>  
                        
                        <InputField handleChange={handleChange} address={address} name="email" type="email" placeholder="E-mail" />
                        <InputField handleChange={handleChange} address={address} name="street" type="text" placeholder="Street" />
                        
                        <div className="grid grid-cols-2 gap-4">
                        <InputField handleChange={handleChange} address={address} name="city" type="text" placeholder="city" />
                        <InputField handleChange={handleChange} address={address} name="country" type="text" placeholder="Country" />
                        </div>
                        
                        
                        <InputField handleChange={handleChange} address={address} name="zipcode" type="number" placeholder="ZipCode" />
                        <InputField handleChange={handleChange} address={address} name="state" type="text" placeholder="State" />
                        <InputField handleChange={handleChange} address={address} name="phone" type="text" placeholder="Phone" />

                        <button className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase">
                            Save Address
                        </button>
                </form>
                    </div>
            
            <img className="flex flex-1 max-w-md md:w-0.5 lg:w-1 mb-16 md:mt-0" src={assets.add_address_image} alt="add address image" />
        </div>
        </div>
		
	);
};

export default AddAddress;
