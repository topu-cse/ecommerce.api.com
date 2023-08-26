import categoryModel from "../models/categoryModel.js";
import slugify
 from "slugify";
export const createCategoryController=async(req,res)=>{
    try{
     const {name}=req.body
     if(!name){
        return resizeBy.status(401).send({message:'ame is required'})
     }
     const existinCategory =await categoryModel.findOne({name})
     if(existinCategory){
        return resizeBy.status(200).send({
            success:true,
            message:'Category Already Exisits'
        })

     }

   const category =await new categoryModel( {name,slug:slugify(name)}).save()
   res.status(201).send({
    success:true,
    message:'new category create',
    category
   })

    }catch(error){
     console.log(error)
     res.status(500).send({
        success:false,
        error,
        message:"Error in category"
     })
    }
};