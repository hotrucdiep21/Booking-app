import express from "express";
import { register } from "../controller/auth.controller.js";


const router = express.Router();
//create
router.post("/register", register);
//update
//delete
//get
//getall


export default router;