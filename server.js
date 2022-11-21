require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const mongoose = require("mongoose")
const connectDB = require('./config/dbConnection')

// database Connection
connectDB()


// middleware for json files
app.use(express.json())

//route middleware
app.use('/post',require('./routes/postRoute'))
app.use('/user',require('./routes/userRoute'))
app.use('/login',require("./routes/authRoute"))


app.use('/test',(req,res)=>{
    res.send("hello")
})




mongoose.connection.once('open',()=>{
    console.log("Connected to mongo db")
    app.listen(PORT, ()=> console.log(`Server running: http://localhost:${PORT}`))
 })
 

