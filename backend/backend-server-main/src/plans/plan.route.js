const express=require("express")
const Plans=require("./plan.model")

const app=express.Router()

app.get("/",async(req,res)=>
{
    const {page} = req.query
    let plans=await Plans.find().limit(11).skip((page-1)*11)    
    let totalplan=await Plans.find()    
    res.send({plans,total:totalplan.length}) 
})

app.get("/search",async(req,res)=>{
    const {page,q} = req.query;
   
    let plans=await Plans.find({x_small: {$regex : q}}).limit(12).skip((page-1)*12)   
    res.send({plans,total:plans.length}) 
})
app.get("/filter",async(req,res)=>{
    const {page,minutes} = req.query;
    
    let plans=await Plans.find( { min: { $lt: +minutes } } ).limit(12).skip((page-1)*12)   
    res.send({plans,total:plans.length}) 
})


module.exports=app 