import './App.css';
import Store from './Pages/Store/Store';
import Home_page from './Pages/home_page/Home_page';
import Navbar_main from './Components/homepage/navbar_main/Navbar_main';

function App() {
  return (
    <>
    <Navbar_main/>
      <Home_page/>
      <Store/>
    </>

  );
}

export default App;
