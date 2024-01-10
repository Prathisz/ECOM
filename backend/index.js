import express from "express"
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import multer from "multer";
import cors from 'cors';
const port=4000;

const app =express();

app.use(express.json());
app.use(cors());

//Database connection with mongodb

mongoose.connect("mongodb+srv://prathishjj:prathishjjj@cluster0.4bblcnr.mongodb.net/&dbname=EComm");

//Api Creation
app.get("/",(req,res)=>{
    res.send("Express app is running");
})


//creating endpoint for user login

app.post('/sign',async(req,res)=>{
    let user = awit Users.findOne({email:req.body.email});
    if(user){
        const passCompare=req.body.password === user.password;
        if(passCompare){
            const date = {
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong email id"});
    }
})








app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running:"+port);
    }
    else{
        console.log("Error:"+error);
    }
})


//image storage engine

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage})
//creating upload images
app.use('/images',express.static('upload/images'))
app.posst("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})