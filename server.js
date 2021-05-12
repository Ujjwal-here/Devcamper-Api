const express=require("express")
const dotenv=require("dotenv")
const connectDb=require("./config/db")
const colors=require("colors")

dotenv.config({path:"./config/config.env"})

connectDb()

const bootcamps=require("./routes/bootcamps")

const app=express()

app.use("/bootcamps",bootcamps)

const PORT=process.env.PORT

app.listen(PORT,console.log('Server running on Port 5000' .yellow.bold))