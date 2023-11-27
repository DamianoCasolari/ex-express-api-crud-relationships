const  express = require("express")
const router = express.Router()
const categoryController = require("../controllers/categoryController")
const { body} = require("express-validator")


router.post("/", categoryController.store)


module.exports = router