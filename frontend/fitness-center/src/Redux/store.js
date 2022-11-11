import {legacy_createStore,combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { workoutReducer } from "./WorkoutReducer/WorkoutReducer";


const rootReducer=combineReducers({
   workoutData:workoutReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
  
