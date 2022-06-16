import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Landingpage from "../pages/Landingpage";
import Layout from "../layout";
import SignIn from "../pages/Signin";
import Register from "../pages/Register";
import AdminPanel from "../pages/AdminPanel";
import UserDashboard from "../pages/UserDashboard";
import { cookies } from "../utilities/cookies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Landingpage />} />
        <Route path="register" element={<Register />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path='/dashboard/:id' element={<UserDashboard/>}/>
        <Route
          path="adminPanel"
          element={cookies.get("r") === "a" ? <AdminPanel /> : <Landingpage />}
        />
        <Route
          path="customerPanel"
          element={cookies.get("r") === "c" ? <Landingpage /> : <Landingpage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
