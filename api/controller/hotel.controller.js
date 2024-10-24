import Hotel from "../models/Hotel.js";
import jwt from "jsonwebtoken";
//create
export const createHotel = async (req, res) => {
    try {
        const newHotel = new Hotel(req.body);
        const saveHotel = await newHotel.save();

        res.status(200).json(saveHotel);
    } catch (error) {
        res.status(500).json(error);
    }
}
//update
export const updatedHotel = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json("Hotel has been updated!");
    } catch (error) {
        res.status(500).json(error);
    }
}
//delete
export const deleteHotel = async (req, res) => {
    try {
        await Hotel.findOneAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        res.status(500).json("Delete unsuccesful")
    }
}
//get
export const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(201).json(hotel);
    } catch (error) {
        res.status(500).json("Fail to get Hotel by Id");
    }
}
//getall

export const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find({});
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json("Fail to get all hotels!")
    }
}