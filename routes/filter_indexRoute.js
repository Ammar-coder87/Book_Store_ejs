const express = require("express")
const router = express.Router();

const filter_indexController = require("../Controller/filter_indexController")

router.get("/", filter_indexController.getFilter_IndexPage)



router.get("/fltr", filter_indexController.getFilter_IndexPage)

module.exports = router