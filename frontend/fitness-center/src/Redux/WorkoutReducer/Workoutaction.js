import axios from "axios";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./WorkoutTypes";

export const getWorkoutData= ()=>async (dispatch)=>{
    dispatch({type:GET_DATA_LOADING})
    try{
        let res= await axios.get(`https://backend-server-300e.onrender.com/workouts`)
        let data=await res.data
        dispatch({type:GET_DATA_SUCCESS,payload:data})
    }catch(e){
        dispatch({type:GET_DATA_ERROR})
    }
}