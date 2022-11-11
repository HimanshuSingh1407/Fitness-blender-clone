import './App.css';
import Store from './Pages/Store/Store';
import Home_page from './Pages/home_page/Home_page';
import Navbar_main from './Components/homepage/navbar_main/Navbar_main';
import Workout from "./Pages/Workouts/Workout" 
import CoustomWorkout from "./Pages/Workouts/CoustomWorkout" 
import AllRoutes from './Routes/AllRoutes';
import Login_page from './Pages/login/Login_page';
import MemberShip_signUp from './Pages/membership/MemberShip_signUp';
function App() {
  return (
    <>
    <Navbar_main />
    <AllRoutes/>
      {/* <Home_page/> */}
      {/* <Store/> */}
      {/* <Workout/> */}
      {/* <CoustomWorkout/> */}
      {/* <Login_page/> */}
      <MemberShip_signUp/>
    </>

  );
}

export default App;
