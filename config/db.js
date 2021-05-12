const mongoose=require("mongoose")
const colors=require("colors")


const connectDb= async ()=>{
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })

    console.log("MongoDB connected..." .blue.bold)
}

module.exports=connectDb