import React from "react";
import { Route, Routes } from "react-router-dom";
import Home_page from "../Pages/home_page/Home_page";
import Store from "../Pages/Store/Store";
import CoustomWorkout from "../Pages/Workouts/CoustomWorkout";
import WorkoutVideos from "../Pages/Workouts/WorkoutVideos";
import Workout from "../Pages/Workouts/Workout";
import Cart from "../Pages/Cart/Cart";
import PrivateRoute from "../Components/privateRoute/PrivateRoute";
import MemberShip_signUp from "../Pages/membership/MemberShip_signUp";
import Login_page from "../Pages/login/Login_page";
import Sign_Up_page from "../Pages/signUp_page/Sign_Up_page";
import Programs from "../Pages/Programs/Programs_challenges/Programs";
import Meal from "../Pages/Programs/Meal/Meal";
import Pilot from "../Pages/Programs/Pilot/Pilot";
import Plans from "../Pages/Programs/plans/Plans";
import Bill_Page from "../Pages/Billing/Bill_Page";
import Success from "../Pages/Order Placed/Success";
import Checkout from "../Pages/Checkout/Checkout";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home_page />} />
      {/* workouts */}
      <Route path="/workout" element={<Workout />} />
      <Route path="/workoutvideos" element={<WorkoutVideos />} />
      <Route path="/customworkout" element={<CoustomWorkout />} />
      {/* programs */}
      <Route path="/programs" element={<Programs />} />
      <Route path="/meal" element={<Meal />} />
      <Route path="/pilot" element={<Pilot />} />
      <Route path="/plans" element={<Plans />} />

      {/* store */}
      <Route path="/store" element={<Store />} />

      {/* membership */}
      <Route path="/membership" element={<MemberShip_signUp />} />

      {/* authenfication */}
      <Route path="/signup" element={<Sign_Up_page />} />
      <Route path="/login" element={<Login_page />} />

      {/* carts */}
      <Route path="/cart" element={<Cart />} />
      {/* billing */}
      <Route path="/billing" element={ <Bill_Page /> } />
      {/* checkout  */}
      <Route path="/checkout" element={<Checkout/>} />
      {/* success */}

      <Route path="/success" element={<Success/>}/>
    </Routes>
  );
};

export default AllRoutes;
