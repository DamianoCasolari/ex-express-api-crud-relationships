// import built-in and external pack 
const express = require("express")
const fs = require("fs")
const path = require("path")
const cors = require("cors")

// import local files
const postRouters = require("./routes/postRoutes")
const tagRoutes = require("./routes/tagRoutes")
const categoryController = require("./routes/categoryRoutes")

const errorsMiddleware = require("./middleware/errorsMiddleware")
const notFound = require("./middleware/routeNotFound")

const corsOption = {
    origin:'http://localhost:5173',
    methods:'PUT,PATCH,GET,POST,DELETE,HEAD',
    credentials: true
}


// create istance of express 
const app = express()
// configure static files
app.use(express.static("public"))


// configure body-parser for "application/json" 
app.use(express.json())

//enable cors
app.use(cors(corsOption));

// Crete routes GET
app.use("/posts", postRouters)
app.use("/tags", tagRoutes)
app.use("/categories", categoryController)

// Add page not found middleware
app.use(notFound)

// Crete errors middleware
app.use(errorsMiddleware)

// Bind server with a PORT
app.listen(3000, console.log("Create server correctly = http://localhost:3000/posts"))