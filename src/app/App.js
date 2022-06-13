import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Landingpage from "../pages/Landingpage";
import Layout from "../layout";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Landingpage />} />
        <Route path="register" element={<Register />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
