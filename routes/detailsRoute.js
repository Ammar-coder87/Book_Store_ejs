const express = require("express")
const router = express.Router();

const detailsController = require("../Controller/detailsController")

router.get("/details/:id", detailsController.getDeatailsPage)

module.exports = router