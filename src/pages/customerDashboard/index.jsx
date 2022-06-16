import React, { useState, useEffect } from "react";
import { Menu, Icon } from "semantic-ui-react";
import Home_Dash from "./Home";
import Dash_user from "./My_Dashboard";
import Sidebar from "./Sidebar";
import Transaction from "./Transactions";
import Settings from "./Settings";
import Withdraw from "./Withdraw";
import Recharge from "./Recharge";
import MainStyle from "./main.module.css";
import { ajax } from "../../utilities/ajax";

function UserDashboard() {
  const [barActive, setBarActive] = useState(false);
  const [active, setActive] = useState("Home");

  //#region Customer Data
  const [customerData, setCustomerData] = useState({});
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    ajax.get("customer/getCustomerData", true).then((data) => {
      setCustomerData(data);
      setDidMount(true);
    });
  }, []);

  //#endregion

  return (
    didMount && (
      <>
        <Menu stackable fixed="top">
          <h3
            style={{
              marginTop: "10px",
              marginLeft: "30px",
              color: "white",
              color: "black",
            }}
          >
            Dashboard
          </h3>

          <Menu.Item position="right">
            <Icon
              name="bars"
              style={{ cursor: "pointer" }}
              onClick={() => setBarActive(!barActive)}
            ></Icon>
          </Menu.Item>
        </Menu>

        <div className={MainStyle.flexContainer}>
          {barActive === false && (
            <Sidebar active={active} setActive={setActive} disable={false} />
          )}
          {barActive === true && (
            <Sidebar active={active} setActive={setActive} disable={true} />
          )}
          {active === "Home" && <Home_Dash customer={customerData} />}
          {active === "My_Dashboard" && <Dash_user />}
          {active === "Transactions" && <Transaction />}
          {active === "Settings" && <Settings />}
          {active === "Withdraw" && <Withdraw />}
          {active === "Recharge" && <Recharge />}
        </div>
      </>
    )
  );
}

export default UserDashboard;
