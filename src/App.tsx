import React from "react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/organisms/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Homepage />
      </BrowserRouter>
    </div>
  );
}

export default App;
