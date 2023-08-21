import userModel from "../models/userModel.js";
import {hashPassword} from './../helpers/authHelper.js'

export const registerController =async(req,res)=>{
     
     try{
       const {name,email,password, phone,addres}=req.body
       // validation
       if(!name){
        return res.send({error:'Name is Required'}) 
       }
       if(!email){
        return res.send({error:'Email is Required'}) 
       }
       if(!password){
        return res.send({error:'Password is Required'}) 
       }
       if(!phone){
        return res.send({error:'phone Number is Required'}) 
       }
       if(!addres){
        return res.send({error:'Addres is Required'}) 
       }


       // check user
       const exisitingUser =await userModal.findOne({email})
       // exisiting user
       if(exisitingUser){
        return res.status(200).send({
            success:true,
            message:'Already Register please login'
        })
       }
      // resgister user
      const hashedPassword=await hashPassword(password)
      //save
      const user = new userModel({name,email, phone,addres,password:hashedPassword}).save()
      res.status(201).send({
        success:true,
        message: "user Register Successfully",
        user
      })


     }
     catch(error){
      console.log(error)
      res.status(500).send({
        succes:false,
        messahe:'error in registeration'
      })
     }
};

