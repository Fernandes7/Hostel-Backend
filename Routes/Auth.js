const router=require("express").Router()
const Userdata=require("../models/User")


router.post("/signup",async(req,res)=>{
    const isExist=await Userdata.findOne({email:req.body.data.email})
    if(isExist)
    res.send("Already Exist User")
    else
    {
    const newuser= new Userdata(req.body.data)
    const saveduser=await newuser.save()
    res.send(saveduser)
    }
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


router.post("/update/:id",async(req,res)=>{
    const id=req.params.id
    const update=await Userdata.findByIdAndUpdate(id,req.body.updateddata)
    if(update)
    {
        const selected=await Userdata.findById(id)
        res.send(selected)
    }
    else
    res.send("failed")
})




 module.exports=router