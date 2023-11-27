const  express = require("express")
const router = express.Router()
const categoryController = require("../controllers/categoryController")
const { body} = require("express-validator")


router.post("/",
body("name").isString().notEmpty().isLength({min:3, max: 30}), 
body("description").isString().notEmpty(), 
categoryController.store)


module.exports = router