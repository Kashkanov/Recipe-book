const express = require("express");

const login = require("../services/auth/login");
const createUser = require("../services/auth/signup");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", login);
router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out" });
})
router.get("/me", authenticateToken, (req, res) => {
    const user =  req.user.user        //<===
    // console.log("req.user: ", user._id, " ", user.username);        //<===
    res.json({ id: user._id, username: user.username });
})

module.exports = router;