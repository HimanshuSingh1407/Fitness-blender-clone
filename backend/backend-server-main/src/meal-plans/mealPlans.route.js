const express=require("express")
const MealPlans=require("./mealPlans.model")

const app=express.Router()

app.get("/",async(req,res)=>
{
    let meal=await MealPlans.find()      
    res.send(meal) 
})



module.exports=app