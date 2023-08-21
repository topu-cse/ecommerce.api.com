import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js"

//configure env
dotenv.config();
//database config
connectDB();
//rest object
const app = express()

//middelwares
app.use(express.json())
app.use(morgan('dev'))

//rest api

app.get('/',(req,res)=>{
    res.send({
        message:'welcome to ecommerce app'
    })
})

//PORT
const PORT =process.removeListener.PORT || 8080

//run listen
app.listen(PORT,()=>{
    console.log(`server Running on ${PORT}`.bgCyan.white)
})