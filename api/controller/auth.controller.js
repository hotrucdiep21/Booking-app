import mongoose from "mongoose";
import User from "../models/User.js"
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { createErr } from "../utils/error.js"
//create
export const register = async (req, res, next) => {
    try {
        const salt = bycrypt.genSaltSync(10);
        const hashPassword = await bycrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        });

        const user = await newUser.save();
        res.status(200).json({ user, message: "User has been created!" })
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createErr(404, "User not found"))
        const isPasswordCorrect = bycrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) return next(createErr(400, "Password is incorect"))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)
        const { password, isAdmin, ...ortherDetails } = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true
        }).
            status(200).json({ user: ortherDetails, message: "Login successfully" });
    } catch (error) {
        next(error);
    }
}
//update
//delete
//get
//getall