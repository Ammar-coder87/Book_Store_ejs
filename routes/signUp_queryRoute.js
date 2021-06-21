const express = require("express")
const router = express.Router();

const signUp_queryController = require("../Controller/signUp_queryController")

router.get("/signUpQuery", signUp_queryController.getSignUp_queryPage)

module.exports = router