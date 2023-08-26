import express from "express"
import {isAdmin,requireSignIn} from './../middlewares/authMiddleware.js'
import { createCategoryController } from "../controllers/createCategoryController.js"

const router =express.Router()


//routers
//create category
router.post("/create-category",requireSignIn,isAdmin,createCategoryController)

//updeate category
router.put('.update-category',requireSignIn,isAdmin,updateCategoryController)


export default router