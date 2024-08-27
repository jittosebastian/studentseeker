const mongoose=require('mongoose');
const appSchema=mongoose.Schema({
    grpName:String,
    description:String,
    subject:String,
    members:String,
})
const AppData=mongoose.model('approvals',appSchema);
module.exports=AppData