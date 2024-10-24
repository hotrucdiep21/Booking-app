import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
//update
export const updatedUser = async (req, res) => {
    const id = req.params.id;
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashPassword;
        }
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({user: updatedUser, message: "User has been updated!"});
    } catch (error) {
        res.status(500).json(error);
    }
}
//delete
export const deleteUser = async (req, res) => {
    try {
        await User.findOneAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (error) {
        res.status(500).json("Delete unsuccesful")
    }
}
//get
export const getUserById = async (req, res) => {
    console.log(req.params.id)
    try {
        const user = await User.findById(req.params.id)
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json("Fail to get user by Id");
    }
}
//getall

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json("Fail to get all Users!")
    }
}