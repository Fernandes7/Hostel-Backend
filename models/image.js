const mongoose=require("mongoose")
const ImageSchema=mongoose.Schema({
    name:String,
    iamge:{
        data:Buffer,
        contentType:String
    }
})
module.exports=mongoose.model("Image",ImageSchema)