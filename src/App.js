import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Wrapper from "./pages/Wrapper"
import Login from "./pages/Login" 
import Home from "./pages/Home"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/regist" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
