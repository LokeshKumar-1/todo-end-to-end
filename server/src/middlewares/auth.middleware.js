const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require("../../config/env.js")

exports.authMiddleware = (req, res, next) => {

    const tokenInHeader = req.headers.authorization

    if (!tokenInHeader) return res.status(401).json({message: "No token provided"})

    const splitToken = tokenInHeader.split(' ')[1]

    if (!splitToken) return res.status(401).json({message: "No token provided"})

    try {
        const decoded = jwt.verify(splitToken, JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({message: "Token expired"});
        }
        if (err.name === "JsonWebTokenError") {
            return res.status(401).json({message: "Invalid token"});
        }
        if (err.name === "NotBeforeError") {
            return res.status(401).json({message: "Token not active yet"});
        }
        return res.status(401).json({message: "Unauthorized", error: err.message});
    }
}