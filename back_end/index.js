const express = require("express")
const app = express()

const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const routerUrls = require("./routes/routes")

dotenv.config()

mongoose.connect(process.env.db, () => console.log("data base connected"))

app.use(cors())
app.use(express.json())
app.use('/app', routerUrls)

app.listen(3001, () => {
    console.log("server has been started")
})