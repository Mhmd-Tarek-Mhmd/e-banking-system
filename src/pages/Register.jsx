import React, { useState } from "react";
import identity from "./identity.module.scss";
import { ajax } from "../utilities/ajax";
import { NavLink } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState([""]);
  //   console.log(firstName, lastName, Email, Phone, Password);

  function reg(firstName, lastName, Email, Phone, Password, e) {
    e.preventDefault();

    if (confirmPassword !== Password) {
      setErrorMessage(["Passwords do not match"]);
      return;
    }

    var formdata = new FormData();
    formdata.append("FirstName", firstName);
    formdata.append("LastName", lastName);
    formdata.append("Email", Email);
    formdata.append("Phone", Phone);
    formdata.append("Password", Password);

    ajax.post("identity/register", formdata).then((response) => {
      if (response.ok) setErrorMessage([""]);
      else return response.json().then((errors) => setErrorMessage(errors));
    });
  }

  return (
    <>
      <div className={identity.sign}>
        <main className={identity.form}>
          <form
            onSubmit={(e) =>
              reg(firstName, lastName, Email, Phone, Password, e)
            }
            className={identity.formBody}
          >
            <h1>Registration</h1>
            <div className={identity.input}>
              <div className={identity.inputItems}>
                <div className={identity.inputItem}>
                  <label htmlFor="first-name">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className={identity.inputItem}>
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className={identity.inputItems}>
                <div className={identity.inputItem}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={identity.inputItem}>
                  <label htmlFor="phone-number">Contact Number</label>
                  <input
                    type="tel"
                    id="phone-number"
                    name="phoneNumber"
                    pattern="[0-5]{3}[0-9]{8}"
                    required
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className={identity.inputItems}>
                <div className={identity.inputItem}>
                  <label htmlFor="password">Password (8 characters)</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    pattern="[0-9-a-z]{8,20}[A-Z]{1}[*-+-?-!]{1}"
                    required
                    minLength="8"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/*}  {Password!==''&&(
                                <div className={identity.checking}>
                                 Password should be have one at least uppercase
                                 Password should be have one at least number 
                                 Password should be have one at least symbolic
                                 Password should be at least 8 letter and maxmum 20
                                </div>
                          )}{*/}
                </div>
                <div className={identity.inputItem}>
                  <label htmlFor="confirm password">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    required
                    minLength="8"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className={identity.errorMessage}>
                {errorMessage.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </div>
            </div>
            <div className={identity.flex}>
              <button
                style={{ marginBottom: "10px", marginTop: "25px:" }}
                className={identity.btnSign}
                type="submit"
              >
                Sign Up
              </button>
              <NavLink className={identity.newAccount} to="/signIn">
                Have an Account?
              </NavLink>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
export default Register;
