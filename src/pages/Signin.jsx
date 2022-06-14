import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import identity from "./identity.module.scss";
import { ajax } from "../utilities/ajax";
import { cookies } from "../utilities/cookies";

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState([""]);
  const navigateTo = useNavigate();

  function login(e) {
    e.preventDefault();

    ajax
      .post("identity/login", new FormData(e.currentTarget))
      .then((response) => {
        if (response.ok) {
          setErrorMessage([""]);
          response.json().then((data) => {
            cookies.add("j", data.j, data.rememberMe ? 7 : null);
            cookies.add("r", data.r, data.rememberMe ? 7 : null);

            navigateTo(data.r === "a" ? "/adminPanel" : "/");
          });
        } else response.json().then((errors) => setErrorMessage(errors));
      });
  }

  return (
    <div className={identity.sign}>
      <div className={identity.form}>
        <form className={identity.formBody} onSubmit={login}>
          <h1> Maze ID</h1>
          <div className={identity.input}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              minLength={8}
              required
            />
            <div className={identity.flexHorizontal}>
              <input type="checkbox" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <div className={identity.errorMessage}>
              {errorMessage.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>

            {/* <NavLink className={identity.forgotPass} to="/forgotPassword">
              Forgot Password?
            </NavLink> */}
          </div>
          <div className={identity.flex}>
            <button
              style={{ marginBottom: 10, marginTop: 20 }}
              className={identity.btnSign}
              type="submit"
            >
              LOG IN
            </button>
            <NavLink className={identity.newAccount} to="/signUp">
              Create New Account?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
