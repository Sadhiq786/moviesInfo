import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import CompanyInformation from "./Components/CompanyInfo/CompanyInformation";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Register/>}/>
        <Route path="/company" element={<CompanyInformation/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
