const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const dbConnect = require('./config/mongo')
const app = express()
const cors = require("cors")
const {router} = require("./routes")
app.use(cors())
const port = process.env.PORT || 5000

app.use(express.json());


app.use("/api", router);


app.listen(port, () => {
    console.log(`Listening at ${port}`)
})
dbConnect()