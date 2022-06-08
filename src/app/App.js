import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Landingpage from "../pages/Landingpage";
import Layout from "../layout";
import SignIn from "../pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Landingpage />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
