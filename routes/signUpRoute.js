const express = require("express")
const router = express.Router();

const signUpController = require("../Controller/signUpController")

router.get("/signUp", signUpController.getSignUpPage)

module.exports = router