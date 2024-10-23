import mongoose from "mongoose";
import User from "../models/User.js"
//create
export const register = async(req, res, next) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const user = await newUser.save();
        res.status(200).json({user, message: "User has been created!"})
    } catch (error) {
        next(error);
    }
}
//update
//delete
//get
//getall