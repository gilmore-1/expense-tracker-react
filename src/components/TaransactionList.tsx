import React from "react";
import { SomeContext } from "../App";

function TaransactionList() {
  let context = React.useContext(SomeContext);
  let { transactions, setTransactions } = context;
  const handleDelete = (id: number) => {
    const newTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(newTransactions);
  };
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{transaction.amount}</span>
            <button
              onClick={() => handleDelete(transaction.id)}
              className="delete-btn"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaransactionList;
