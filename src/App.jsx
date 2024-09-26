import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
     <Outlet/>
    </main>
  );
};

export default App;
