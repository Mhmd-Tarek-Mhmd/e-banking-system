import React from "react";
import logo from "../logo.svg";
import { Counter } from "../features/counter/Counter";
import "./App.css";
import Landingpage from "../pages/Landingpage";
import Footer from '../layouts/Footer'
import Nav from "../layouts/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import SignIn from "../pages/Signin";
import AdminPanal from "../pages/AdminPanal";

function App() {
  function Ele(){
   return(
    <>
    <div className="App">
    <Nav/> 
    <Landingpage/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      <Footer/>
    </div>
    </>
   )
  }
  return (
    <Routes>
    <Route path='/' element={<Ele/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path="/signIn" element={<SignIn/>} />
    {/*} We should to use admin Id in this url ! {*/}
    <Route path='/adminpanal/:id' element={<AdminPanal/>}/>
    </Routes>
  );
}

export default App;
