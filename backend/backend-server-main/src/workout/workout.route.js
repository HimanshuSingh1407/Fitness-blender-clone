const express=require("express")
const Workouts=require("./workout.model")

const app=express.Router()

app.get("/",async(req,res)=>{
      const {page} = req.query
   
     
    let workout=await Workouts.find().limit(12).skip((page-1)*12)   
    let totalWorkout=await Workouts.find() 
    res.send({workout,Total:totalWorkout.length}) 
})

   // Search api route

    app.get("/search",async(req,res)=>{
        const {page,q} = req.query;
        console.log(q)

        let workout=await Workouts.find({content_title:q}).limit(12).skip((page-1)*12)   
        let totalWorkout=await Workouts.find() 
        res.send({workout,Total:totalWorkout.length}) 
    })
 


  // Filter api route

app.get("/filter",async(req,res)=>{
      const {page,category} = req.query
    console.log(category);
    let workout = await Workouts.find({detail_value:"Yoga"}).limit(12).skip((page-1)*12)   
    let totalWorkout=await Workouts.find() 
    res.send({workout,Total:totalWorkout.length}) 
})



module.exports=app