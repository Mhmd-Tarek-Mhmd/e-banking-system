import React, { useState, useEffect } from "react";
import { Search, Feed, Icon } from "semantic-ui-react";
import { ajax } from "../../utilities/ajax";

function Transaction() {
  const image = "https://react.semantic-ui.com/images/avatar/small/jenny.jpg";
  const image2 = "https://react.semantic-ui.com/images/avatar/small/elliot.jpg";

  const [transactions, setTransactions] = useState([]);
  let sourceTransactions = [];

  useEffect(() => {
    ajax.get("admin/getCompleteTransactionLog", true).then((response) => {
      if (response.ok)
        response.json().then((data) => {
          setTransactions(data);
          sourceTransactions = data;
        });
    });
  }, []);

  function searchTransactions(e) {
    if (e.target.value !== "")
      setTransactions(transactions.filter((t) => t.id === e.target.value));
    else setTransactions(sourceTransactions);
  }

  return (
    <div style={{ marginTop: "100px" }}>
      {transactions.length === 0 ? (
        <Feed
          style={{
            border: "solid 1px black",
            width: "80%",
            marginTop: "40px",
            marginLeft: "40px",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          No transactions are done so far
        </Feed>
      ) : (
        <>
          <Search
            placeholder="Enter Transaction Id"
            style={{ marginLeft: "50px" }}
            size="massive"
            onBlur={searchTransactions}
          />

          {transactions.map((transaction) => (
            <Feed
              key={transaction.id}
              style={{
                border: "solid 1px black",
                width: "80%",
                marginTop: "40px",
                marginLeft: "40px",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <h3>Transaction ID: {transaction.id}</h3>
              <Feed.Event
                image={image}
                date={new Date(transaction.date).toLocaleDateString()}
                summary={
                  transaction.type === "transfer"
                    ? `${transaction.transactor} sent ${transaction.amount}$ to ${transaction.transferredTo}`
                    : transaction.type === "withdraw"
                    ? `${transaction.transactor} withdrew ${transaction.amount}$`
                    : `${transaction.transactor} deposited ${transaction.amount}$`
                }
              />
              {transaction.type === "transfer" ? (
                <Icon
                  name="exchange"
                  style={{ float: "right", marginTop: "-30px" }}
                  size="big"
                  color="blue"
                />
              ) : transaction.type === "deposit" ? (
                <Icon
                  name="arrow right"
                  style={{ float: "right", marginTop: "-30px" }}
                  size="big"
                  color="green"
                />
              ) : (
                <Icon
                  name="arrow left"
                  style={{ float: "right", marginTop: "-30px" }}
                  size="big"
                  color="red"
                />
              )}
            </Feed>
          ))}
        </>
      )}
    </div>
  );
}

export default Transaction;
