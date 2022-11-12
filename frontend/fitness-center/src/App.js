import Store from './Pages/Store/Store';
import Footer from './Pages/Footer/Footer';
import Cart from './Pages/Cart/Cart';
import Navbar_main from './Components/homepage/navbar_main/Navbar_main';
import AllRoutes from './Routes/AllRoutes';
import MemberShip_signUp from './Pages/membership/MemberShip_signUp';
import Sign_Up_page from './Pages/signUp_page/Sign_Up_page';


function App() {
  return (
  <>
  <Navbar_main/>
  <AllRoutes/>
  <Footer/>
  </>
  );
}

export default App;
