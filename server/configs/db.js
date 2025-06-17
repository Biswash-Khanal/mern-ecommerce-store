import mongoose from "mongoose";

const connectDB = async()=>{

    try {
        mongoose.connection.on("connected", ()=>console.log("database connected!"));
        mongoose.connection.once("open", ()=>console.log("Database is connected and ready to use!"));

        await mongoose.connect(`${process.env.MONGODB_URI}/greencart`)

    } catch (error) {
        console.log(error.message)
    }

}

export default connectDB;