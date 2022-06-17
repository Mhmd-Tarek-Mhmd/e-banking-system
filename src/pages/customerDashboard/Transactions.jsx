import React, { useState, useEffect } from "react";
import { ajax } from "../../utilities/ajax";
import profile from "./profile.module.css";

export default function Transaction({ customerName, customerId, accounts }) {
  const [transactions, setTransactions] = useState([]);
  const [accountId, setAccountId] = useState(accounts[0].id);

  useEffect(() => {
    ajax
      .get(`customer/getTransactionLog/${accountId}`, true)
      .then((transactions) => setTransactions(transactions));
  }, [accountId]);

  return (
    <div className="wrapper">
      <div className={profile.container}>
        <div className={profile.greating}>
          <h3>Welcome, Mr. {customerName}</h3>
          <p>ID: {customerId}</p>
        </div>

        <h2>
          Kindly select the account that you want to display the transactions
          for
        </h2>
        <form>
          <select name="accountId" onChange={e => setAccountId(e.target.value)}>
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.type}: {account.id}
              </option>
            ))}
          </select>
        </form>

        <h1>Transactions for account:</h1>
        <h2>{accountId}</h2>
        {transactions.length === 0 ? (
          <h3 style={{marginTop: "1em"}}>This account has no transactions yet</h3>
        ) : (
          <table className={profile.transaction}>
            <tr>
              <th>Date</th>
              <th>Particulars</th>
              <th>Dr.</th>
              <th>Cr.</th>
              <th>Balance</th>
            </tr>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>{transaction.type}</td>
                <td>
                  {transaction.type === "Deposit" ? transaction.amount : 0.0}
                </td>
                <td>
                  {transaction.type === "Withdraw" ||
                  transaction.type === "Transfer"
                    ? transaction.amount
                    : 0.0}
                </td>
                <td>{transaction.credit}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
}
