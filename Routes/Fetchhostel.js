const router=require("express").Router()
const Hosteldata=require("../models/Hostels")

router.get("/fetchhotel",async(req,res)=>{
const data=await Hosteldata.find()
res.send(data)
})

router.post("/favhotel",async(req,res)=>{
    let arry=[]
    try{ 
    await Promise.all(
    req.body.data.map(async(item)=>{
    let data=await Hosteldata.findById(item)
    arry.push(data)
    }))
    res.send(arry)
}catch{
    console.log("Error")
} 
})



module.exports=router