const mongoose = require("mongoose");
const {DB_URI, NODE_ENV} = require("../config/env");


if (!DB_URI) {
    throw new Error("MongoDB URI is missing");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log(`MongoDB Connected with ${NODE_ENV} env`);
    } catch (error) {
        console.log("MongoDB connection error" + error);
        process.exit(1)
    }
}

module.exports = connectToDatabase