const router=require("express").Router()
const Hosteldata=require("../models/Hostels")

router.get("/fetchhotel",async(req,res)=>{
const data=await Hosteldata.find()
res.send(data)
})



module.exports=router