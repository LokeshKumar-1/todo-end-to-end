const express = require("express");
const cors = require("cors");
const {PORT} = require("./config/env.js");
const connectToDatabase = require("./database/mongodb.js");
const authRoutes = require("./src/routes/authRoutes.js");
const dashboardRoutes = require("./src/routes/dashboardRoutes.js");


const app = express()
app.use(express.json())
app.use(cors({origin: "*"}));

app.use("/api/auth", authRoutes)
app.use("/api/dashboard", dashboardRoutes)


app.listen(PORT, async () => {
    console.log("Listening on port " + PORT)
    await connectToDatabase()
})