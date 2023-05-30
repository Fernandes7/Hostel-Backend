const router=require("express").Router()
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

module.exports=router