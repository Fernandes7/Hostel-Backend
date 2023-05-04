const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const Hosteldataroute=require("./Routes/Addhostel")
const Authroute=require("./Routes/Auth")
const Fetchroute=require("./Routes/Fetchhostel")
port=3000


app.use(express.json())
app.use(cors())
app.use("/",Hosteldataroute)
app.use("/",Authroute)
app.use("/",Fetchroute)




mongoose.connect("mongodb://mongo:ihC98rnnQNpgqjQm4ocr@containers-us-west-41.railway.app:6078").then(()=>console.log("Connected to Database"))
app.listen(port,(req,res)=>{
    console.log("Server Started Successfully")
})
