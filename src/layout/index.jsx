import React from "react";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import Nav from './Nav'
import Footer from './Footer'
=======
import Nav from "./Nav";
import Footer from "./Footer";
>>>>>>> 712b26905732c2bd965509bf404a81e2fdb3362e

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
