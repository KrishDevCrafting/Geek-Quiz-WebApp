const User = require("../models/userModel");

// Login User
const loginUser = async (req, res) => {
    res.json({
        mess: "login user"
    });
};

// Signup User
const signupUser = async (req, res) => {
    res.json({
        messg: "signup user"
    });
};

module.exports = { signupUser, loginUser };

