import React from "react";
import { NavLink } from "react-router-dom";
import identity from "./identity.module.scss";
import { request } from "../utilities/request";

export default function SignIn() {
  function login(e) {
    request.post("identity/login", e);
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

            <NavLink className={identity.forgotPass} to="/forgotPassword">
              Forgot Password?
            </NavLink>
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
