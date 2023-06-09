const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const Hosteldataroute=require("./Routes/Addhostel")
const Authroute=require("./Routes/Auth")
const Fetchroute=require("./Routes/Fetchhostel")
const Bookingroute=require("./Routes/BookingRoute")
const ReviewsRoute=require("./Routes/ReviewRoute")
port=8000

app.use(express.json({ limit: '10mb' }));
app.use(cors())
app.use("/",Hosteldataroute)
app.use("/",Authroute)
app.use("/",Fetchroute)
app.use("/",Bookingroute)
app.use("/",ReviewsRoute)




mongoose.connect("mongodb+srv://Ferno:123@cluster0.wqriud4.mongodb.net/Hostel").then(()=>console.log("Connected to Database"))
app.listen(port,(req,res)=>{
    console.log("Server Started Successfully")
})