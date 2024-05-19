
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from './components/Home';
import Viewcart from './components/Viewcart';
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const[cart,setCart] = useState([]);
   return (
    <Provider store={store}>
  
    <BrowserRouter>
      <Header cart={cart}/>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Viewcart />} />
            <Route path="/blog" element={<Blog />} />
        <Route path="/full-stack" element={<Blog />} />
        <Route path="/cyber-security" element={<Blog />} />
        <Route path="/data-science" element={<Blog />} />
          </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
   
    </Provider>
  )
}

export default App
