import cookieParser from "cookie-parser";
import express from "express";
import connectDB from "./configs/db.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 4000;

await connectDB();

//Allow multiple urls to access the backend
const allowedOrigins = ["http://localhost:5173"];

//middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => res.send("API is Working!"));

app.listen(PORT, () => {
	console.log(`sever is running on http://localhost:${PORT}`);
});
