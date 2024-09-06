const express = require("express")
const mongoose = require("mongoose")
const { number } = require("yargs")
const app = express()


mongoose.connect("mongodb+srv://connectingerp1:connecting@connectingcluster.6ifho.mongodb.net/dataconnecting")
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
  coursename: String
})
const userModel = mongoose.model("emp",userSchema);
const emp1 = new userModel({
  name: "Rahul",
  email: "gangu@gmail.com",
  contact: "98765432319",
  coursename:""
})

emp1.save();
app.listen("5001", ()=>{
  console.log("server is running")
}

)
