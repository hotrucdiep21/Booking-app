import express from "express";
import { login, register } from "../controller/auth.controller.js";


const router = express.Router();
//create
router.post("/register", register);
router.post("/login", login)
//update
//delete
//get
//getall


export default router;