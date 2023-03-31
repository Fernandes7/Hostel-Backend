const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const Hosteldataroute=require("./Routes/Addhostel")
const Authroute=require("./Routes/Auth")
const Fetchroute=require("./Routes/Fetchhostel")
port=8000


app.use(express.json())
app.use(cors())
app.use("/",Hosteldataroute)
app.use("/",Authroute)
app.use("/",Fetchroute)




mongoose.connect("mongodb+srv://Ferno:123@cluster0.wqriud4.mongodb.net/Hostel").then(()=>console.log("Connected to Database"))
app.listen(port,(req,res)=>{
    console.log("Server Started Successfully")
})