import React, { useState, useEffect } from "react";
import side from "./Sidebar.module.css";

export default function Sidebar(props) {
  function handleItems() {
    // const ele = document.getElementById(`${props.active}`);
    // ele.classList.add(side.actives);
    // ele.classList.remove(side.li);
  }
  async function handlename(e) {
    if (props.active !== "") {
      const ele = document.getElementById(`${props.active}`);
      ele.classList.remove(side.actives);
      props.setActive(e.target.value);
    } else if (props.active === "") {
      props.setActive(e.target.value);
    }
  }
  if (props.active !== "") {
    handleItems();
  }

  return (
    <>
      {props.disable === true && (
        <div>
          <div className={side.disable}>
            {/*}profile image & text{*/}
            <div className={side.disable}>
              <img src={require("./images/admin.png")} alt="profile_picture" />
              <h3>Mohamed</h3>
              <p>User</p>
            </div>
            {/*} menu item {*/}
            <div>
              <ul>
                <li id="Home" className={side.disable}>
                  {/*} className="active" {*/}
                  <span>
                    <input
                      type="button"
                      disable={true}
                      value="Home"
                      onClick={handlename}
                    />
                  </span>
                </li>
                <li id="My_Dashboard" className={side.disable}>
                  <span>
                    <input
                      type="button"
                      disable={true}
                      value="My_Dashboard"
                      onClick={handlename}
                    />
                  </span>
                </li>
                <li id="Transactions" className={side.disable}>
                  <span>
                    <input
                      type="button"
                      disable={true}
                      value="Transactions"
                      onClick={handlename}
                    />
                  </span>
                </li>
                <li id="Withdraw" className={side.disable}>
                  <span>
                    <input
                      type="button"
                      disable={true}
                      value="Withdraw"
                      onClick={handlename}
                    />
                  </span>
                </li>
                <li id="Recharge" className={side.disable}>
                  <span>
                    <input
                      type="button"
                      disable={true}
                      value="Recharge"
                      onClick={handlename}
                    />
                  </span>
                </li>
                <li id="Settings" className={side.disable}>
                  <span id="Settings">
                    <input
                      type="button"
                      disable={true}
                      value="Settings"
                      onClick={handlename}
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {props.disable !== true && (
        <div className={side.sidebar}>
          {/*}profile image & text{*/}
          <div className={side.profile}>
            <img src={require("./images/admin.png")} alt="profile_picture" />
            <h3>Mohamed</h3>
            <p>User</p>
          </div>
          {/*} menu item {*/}
          <div>
            <ul>
              <li id="Home" className={side.li}>
                {/*} className="active" {*/}

                <span>
                  <input
                    type="button"
                    disable={true}
                    value="Home"
                    onClick={handlename}
                  />
                </span>
              </li>
              <li id="My_Dashboard" className={side.li}>
                <span>
                  <input
                    type="button"
                    disable={true}
                    value="My_Dashboard"
                    onClick={handlename}
                  />
                </span>
              </li>
              <li id="Transactions" className={side.li}>
                <span>
                  <input
                    type="button"
                    disable={true}
                    value="Transactions"
                    onClick={handlename}
                  />
                </span>
              </li>
              <li id="Withdraw" className={side.li}>
                <span>
                  <input
                    type="button"
                    disable={true}
                    value="Withdraw"
                    onClick={handlename}
                  />
                </span>
              </li>
              <li id="Recharge" className={side.li}>
                <span>
                  <input
                    type="button"
                    disable={true}
                    value="Recharge"
                    onClick={handlename}
                  />
                </span>
              </li>
              <li id="Settings" className={side.li}>
                <span id="Settings">
                  <input
                    type="button"
                    disable={true}
                    value="Settings"
                    onClick={handlename}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
