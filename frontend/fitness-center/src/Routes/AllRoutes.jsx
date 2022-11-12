import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home_page from '../Pages/home_page/Home_page'
import Store from '../Pages/Store/Store'
import CoustomWorkout from '../Pages/Workouts/CoustomWorkout'
import Workout from '../Pages/Workouts/Workout'
import Cart from '../Pages/Cart/Cart'
import PrivateRoute from '../Components/privateRoute/PrivateRoute'
import MemberShip_signUp from '../Pages/membership/MemberShip_signUp'
import Login_page from "../Pages/login/Login_page"
import Sign_Up_page from '../Pages/signUp_page/Sign_Up_page'
const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home_page/>} />
    <Route path="/store" element={<Store/>} />
    <Route path="/workout" element={<Workout/>} />
    <Route path='/membership' element={<MemberShip_signUp/>}/>
    <Route path="/cart" element={<Cart/>} />
    <Route path="/signup" element={<Sign_Up_page/>} />
    <Route path="/login" element={<Login_page/>} />
    <Route path="/customworkout" element={<CoustomWorkout/>} />
   </Routes>
  )
}

export default AllRoutes