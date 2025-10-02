const express = require("express")
const router = express.Router()

const {signup, login} = require("../controllers/auth.controller");
const {authMiddleware} = require("../middlewares/auth.middleware");


router.get("/", authMiddleware, (req, res) => {
    res.send("Auth route working!");
});

router.post("/signup", signup)
router.post("/login", login)

module.exports = router;