const router=require("express").Router()
const Userdata=require("../models/User")
const ImageSchema=require("../models/image")
const multer=require("multer")


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

//multer
const Storage=multer.diskStorage({
    destination:"./images",
    filename:(req,file,cb)=>{
        cb(null,`${file.originalname}`)
    }
})
const upload=multer({
    storage:Storage,
    limits:{fileSize:100000000000}
})
router.post("/single", upload.single("image"), (req, res) => {
    if (req.file) {
    res.send("Single file uploaded successfully");
    } else {
    res.status(400).send("Please upload a valid image");
    }
    });

 module.exports=router