const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const userRoutes = require("./Routes/userRoutes")
const adminRoutes = require("./Routes/adminRoutes")
require('dotenv').config()

const app = express()


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connection Successfull");
}).catch((err)=>{
    console.log('error',err.message)
})

app.use(cors({
  origin:"*"
}))

app.use(express.json())

app.use("/",userRoutes)
app.use("/admin",adminRoutes)


app.listen(process.env.PORT,(err)=>{
  if(err){
    console.log(err.message);
  } else{
    console.log(`Server starts on port ${process.env.PORT}`);
  }
})




// 2j9nvETUanZsH4v6

// ajaydevkomath

