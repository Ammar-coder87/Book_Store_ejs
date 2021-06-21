
const express = require("express")
const router = express.Router();
router.use(express.urlencoded({extended : true}));
const queried_dataController = require("../Controller/queried_dataController")

router.get("/query", queried_dataController.getQueried_DataPage)

module.exports = router
