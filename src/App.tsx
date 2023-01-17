import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/organisms/Navbar/Navbar";
// import HomePage from "./components/homepage/home.page";
// import {TextInfo} from "./components/test-info/test-info";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* {/* */}
        <Homepage />
        {/* <Routes><Route path="/old" element={<HomePageOld />} /></Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
