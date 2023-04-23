const mongoose=require("mongoose")
const ImageSchema=mongoose.Schema({
    userid:String,
    image:{
        data:Buffer,
        contentType:String
    }
})
module.exports=mongoose.model("Image",ImageSchema)