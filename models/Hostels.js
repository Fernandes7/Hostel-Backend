const mongoose=require("mongoose")
const Hostelschema=new mongoose.Schema({
    hostelname:{type:String,required:true},
    hostelimage:{type:String,required:true},
    location:{type:String},
    mainlocation:{type:String},
    price:{type:Number},
    pricewithoutfood:{type:Number},
    hosteltype:{type:String},
    noofmembersinroom:{type:String},
    description:{type:String},
    ownername:{type:String},
    contactno:{type:Number},
    amenities:{type:String},
    service:{type:String},
    nearbyplace:{type:String},
    category:{type:String},
    Availableroom:{type:Number},
    Ac:{type:String},
    Wifi:{type:String},
    lat:{type:Number},
    lng:{type:Number}
})
module.exports=mongoose.model("Hostel",Hostelschema)