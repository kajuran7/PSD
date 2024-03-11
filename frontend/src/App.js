import React, { } from 'react';
import './App.css';
import {ToastContainer} from 'react-toastify';
import {Routes,Route} from "react-router-dom";
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Design from './Components/Designs';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import DesignDetails from './Components/DesignDetails';
import Filter from './Components/Filter';
import Dashboard from './Components/Admin/Dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AdminRoutes from './Components/AdminRoutes';
import Payment from './Components/Payment';
import Cart from './Components/cart';
import Checkout from './Components/Checkout';

function App() {
   
  

  
  return (  
    <div>

  <ToastContainer theme="dark"/>
  

      <Routes>
        <Route path="/Home" element={<Home />} />
        < Route path="/About" element={<About />}  />        
        <Route path="/Designs" element={<Design />}  />
        <Route path="/Signup" element={<Signup   />} />
        <Route path="/Contact" element={<Contact  />} />
        <Route path="/Payment" element ={<Payment/>}/>
        <Route path="/Cart" element ={<Cart/>}/>
        <Route path="/Filter" element={<Filter />} />
        <Route path="/designs/:id" element={<DesignDetails />} />
        <Route path="/Admin/*" element={<AdminRoutes><Dashboard /></AdminRoutes>} />
    <Route path="/Checkout" element={<Checkout/>}/>
    
     </Routes>
     <Footer />


    </div>
    
  );
}



export default App;

