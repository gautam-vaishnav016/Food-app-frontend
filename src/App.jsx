import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Success from "./Components/Success";
import Error from "./Components/Error";

const App = () => {
  return (
    <div className="h-screen w-screen bg-zinc-100 shadow-2xl">
      <Routes> 
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/success" element={<Success></Success>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
};

export default App;
