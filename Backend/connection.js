const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://angelsabu314:<angelsabu314>@cluster0.ckvl2qd.mongodb.net/studenseekerDB?retryWrites=true&w=majority&appName=Cluster0")
.then((res)=>{
    console.log('DB connected');
})
.catch((res)=>{
    console.log('DB not connected');
})