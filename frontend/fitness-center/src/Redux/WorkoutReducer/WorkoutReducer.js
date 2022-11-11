import { GET_DATA, GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./WorkoutTypes"

const initialStateData={
    loading:false ,
    error :false,
     data:[]
}

export const workoutReducer=(state=initialStateData,{type,payload})=>{
       switch(type){

        case GET_DATA_LOADING : {
            return {
             ...state,
               loading:true ,
               error :false
            }
         }

         case GET_DATA_SUCCESS : {
           return {
            ...state,
              data:payload,
              loading:false ,
              error :false
           }
        }

        case GET_DATA_ERROR : {
         return {
          ...state,
            loading:false ,
            error :true
         }
      }

        
        default : {
                return state
           }
       }
}