import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Wrapper from "./pages/Wrapper"
import Login from "./pages/Login" 
import Home from "./pages/Home"
import Register from "./pages/Register"
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<Register/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
