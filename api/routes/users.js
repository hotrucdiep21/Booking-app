import express from "express"
import { updatedUser, deleteUser, getAllUsers, getUserById } from "../controller/user.controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

//update
router.put("/:id", verifyUser, updatedUser)
//delete
router.delete("/:id", verifyUser, deleteUser)
//get by id
router.get("/:id", verifyUser, getUserById)
//getall
router.get("/", verifyAdmin, getAllUsers);

//check-auth


export default router;