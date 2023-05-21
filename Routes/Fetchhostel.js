const router=require("express").Router()
const Hosteldata=require("../models/Hostels")
const Favhotel=require("../models/Favhotel")

router.get("/fetchhotel",async(req,res)=>{
const data=await Hosteldata.find()
res.send(data)
})

router.post("/favhotel/:id",async(req,res)=>{
    let userid=req.params.id
    const isExist=await Favhotel.findOne({userid:userid})
    if(isExist)
    {
    const newarry=isExist.favhotelidarray
    await req.body.data.map((item)=>{
        newarry.push(item)
    })
    const savedata=await Favhotel.findOneAndUpdate({userid:userid},{favhotelidarray:newarry})
    if(savedata)
    {
        const updateduser=await Favhotel.findById(savedata._id)
        if(updateduser)
        res.send({data:"updateduser",value:updateduser})
    }
    else
    res.send("user Exist But Error in Svaing")
    }
    else
    {
        const newdata=new Favhotel({userid:userid,favhotelidarray:req.body.data})
        const saveddata=await newdata.save()
        if(saveddata)
        res.send(saveddata)
    }
})



router.get("/fetchfavhotel/:id",async(req,res)=>{
    const userid=req.params.id
    const fetcheddata=await Favhotel.findOne({userid:userid})
    if(fetcheddata)
    {
        const getarry=fetcheddata.favhotelidarray
        let arry=[]
        await Promise.all(
            getarry.map(async(item)=>{
                const data=await Hosteldata.findById(item)
                arry.push(data)
            })
        )
        res.send(arry)
    }
})



module.exports=router