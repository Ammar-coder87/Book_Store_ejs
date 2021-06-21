const express = require("express")
const router = express.Router();
router.use(express.urlencoded({extended : true}));
const personal_dataController = require("../Controller/personal_dataController")

router.post("/register", personal_dataController.getPersonal_DataPage)

module.exports = router