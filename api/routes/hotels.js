import express from "express"
import { createHotel, updatedHotel, deleteHotel, getHotelById, getAllHotels } from "../controller/hotel.controller.js"
import { get } from "http";
const router = express.Router();

//create
router.post("/", createHotel);
//update
router.put("/:id", updatedHotel);
//delete
router.delete("/:id", deleteHotel);
//get
router.get("/:id", getHotelById);
//getall
router.get("/", getAllHotels)


export default router;