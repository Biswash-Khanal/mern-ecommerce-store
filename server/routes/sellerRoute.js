import express from "express";
import { register, login, isAuth, logout } from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import { sellerLogin } from "../controllers/sellerController.js";
import authSeller, { isSellerAuth, sellerLogout } from "../middlewares/authSeller.js";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin)
sellerRouter.get("/is-auth",authSeller, isSellerAuth)
sellerRouter.get("/logout", sellerLogout);

export default sellerRouter;
