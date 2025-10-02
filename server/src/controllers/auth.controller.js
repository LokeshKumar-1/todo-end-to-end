const User = require("../modals/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../../config/env.js");


exports.signup = async (req, res) => {
    try {
        const {username, password} = req.body

        const isExistingUser = await User.findOne({username})
        if (isExistingUser) return res.status(400).json({message: "User already exists"})

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({username, password: hashedPassword})
        return res.status(200).send(user)
    } catch (err) {
        res.status(500).json({message: err?.message || "Something went wrong"})
    }
}

exports.login = async (req, res) => {
    try {
        const {username, password} = req.body

        const registeredData = await User.findOne({username})
        if (!registeredData) return res.status(400).json({message: "Invalid Username"})

        const passValidation = await bcrypt.compare(password, registeredData.password)
        if (!passValidation) return res.status(400).json({message: "Invalid Password"})

        const token = jwt.sign({
            id: registeredData?._id,
            username: registeredData?.username
        }, JWT_SECRET, {expiresIn: "1h"})
        res.status(200).json({message: "login successfully", token})

    } catch (err) {
        res.status(500).json({message: err.message || "Something went wrong"})
    }
}