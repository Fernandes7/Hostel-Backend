const router=require("express").Router()
const Userdata=require("../models/User")


router.post("/signup",async(req,res)=>{
    const newuser= new Userdata(req.body.data)
    const saveduser=await newuser.save()
    res.send(saveduser)
})


router.post("/login",async(req,res)=>{
    const user= await Userdata.findOne({email:req.body.data.email})
    if(user)
    {
        if(user.password===req.body.data.password)
        res.send(user)
        else
        res.send("IP")
    }
    else
    res.send("IU")
})
 module.exports=router