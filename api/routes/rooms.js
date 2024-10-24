import express from "express"
import { createRoom, deleteRoom, getAllRooms, getRoomById, updateRoom } from "../controller/room.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router();
//create
router.post("/:id", verifyAdmin, createRoom);
//update
router.put("/:id", verifyAdmin, updateRoom);
//delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//get
router.get("/:id", getRoomById)
//getall
router.get("/", getAllRooms);

export default router;