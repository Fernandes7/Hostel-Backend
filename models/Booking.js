const mongoose=require("mongoose")
const Bookingschema=new mongoose.Schema({
    Bookeduserid:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    Bookedhostelid:{},
    Noofrooms:{type:Number,required:true}
},{timestamps:true})
module.exports=mongoose.model("Booking",Bookingschema)