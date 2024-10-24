import express from "express"
import { createHotel, updatedHotel, deleteHotel, getHotelById, getAllHotels } from "../controller/hotel.controller.js"

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);
//update
router.put("/:id", verifyAdmin, updatedHotel);
//delete
router.delete("/:id", verifyAdmin, deleteHotel);
//get
router.get("/:id", getHotelById);
//getall
router.get("/", getAllHotels)


export default router;