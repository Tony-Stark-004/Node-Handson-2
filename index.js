const express= require("express")
const app = express()
const fs = require("fs")
const path = require("path")

app.get("/",(req,res)=>{
    res.send("You are My HomePage")
    res.end()
})

app.get("/about",(req,res)=>{
    res.send("Express About")
    res.end()
})

app.get("/gallery",(req,res)=>{
    res.send("you are the only wallpaper of my gallery")
    res.end()
})
app.post("/submit",(req,res)=>{
    res.send("Post Worked")
    res.end()
})

app.listen(8000,()=>{
    console.log("Application is Running Smoothly without nodemon hehehe")
})