const router=require("express").Router()
const Booking = require("../models/Booking")
const BookingSchema=require("../models/Booking")

router.post("/addbooking",async(req,res)=>{
    const ismorethan2=await BookingSchema.find({Bookeduserid:req.body.data.Bookeduserid})
    if(ismorethan2.length >2)
    res.send("2")
    else
    {
    const newbooking=new BookingSchema(req.body.data)
    const saveddata=await newbooking.save()
    if(saveddata)
    res.send(saveddata)
    else
    res.send("Failed") 
    }
})



router.get("/getbooking/:id",async(req,res)=>{
const userid=req.params.id
const getbooking=await BookingSchema.find({Bookeduserid:userid})
if(getbooking)
res.send(getbooking)
else
res.send("Failed to get user")
})

module.exports=router