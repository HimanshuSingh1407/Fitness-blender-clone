import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home_page from '../Pages/home_page/Home_page'
import Store from '../Pages/Store/Store'
import CoustomWorkout from '../Pages/Workouts/CoustomWorkout'
import Workout from '../Pages/Workouts/Workout'
import Cart from '../Pages/Cart/Cart'
import PrivateRoute from '../Components/privateRoute/PrivateRoute'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home_page/>} />
    <Route path="/store" element={<Store/>} />
    <Route path="/workout" element={<Workout/>} />
    <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
    <Route path="/customworkout" element={<CoustomWorkout/>} />
   </Routes>
  )
}

export default AllRoutes