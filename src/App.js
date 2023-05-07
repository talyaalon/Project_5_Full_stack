import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Albums from "./pages/Albums";
import Posts from "./pages/Posts";
import Logout from "./pages/Logout";
import Todos from "./pages/Todos";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Home />} >
         <Route path="/Info" element={<Info />}/>
         <Route path="/Todos" element={<Todos />}/>
         <Route path="/Posts" element={<Posts />}/>
         <Route path="/Albums" element={<Albums />}/>
         <Route path="/Logout" element={<Logout />}/>
      </Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
