import categoryModel from "../models/categoryModel.js";
import slugify
 from "slugify";
import router from "../routes/categoryRoutes.js";
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


//updateCategoryController


export const updateCategoryController=async(req,res)=>{
  try{
    const {name}=req.body
    const {id}=req.params
 const category= await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
 res.status(200).send({
    success:true,
    message:'category update successfully',
    category,
 });
  } catch(error){
    console.log(error)
    res.status(500).send({
        success:false,
        error,
        message:'Error while updating category'

    })
  } 
};


//get all cate

export const categoryController=async(req,res)=>{
    try{
    const category = await categoryModel.find({})
    res.status(200).send({
        success:true,
        message:'All category list',
        category,

    })
    }catch(error){
       console.log(error)
       res.status(500).send({
        success:false,
        error,
        message:'Error while getting all categories'
       }) 
    }
}


// single category
export const singleCategoryController = async (req, res) => {
    try {
      const category = await categoryModel.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get SIngle Category SUccessfully",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single Category",
      });
    }
  };

  //delete category
export const deleteCategoryCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await categoryModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting category",
        error,
      });
    }
  };