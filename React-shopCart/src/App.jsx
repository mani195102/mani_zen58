
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './components/Home';
import Viewcart from './components/Viewcart';
import Footer from "./components/Footer";
import CartContext from './components/CartContext'

function App() {
  const[cart,setCart] = useState([]);
   return (
   <>
   <CartContext.Provider value={{ cart, setCart}}>
    <BrowserRouter>
      <Header cart={cart}/>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Viewcart />} />
          </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
   </CartContext.Provider>
</>
  )
}

export default App
