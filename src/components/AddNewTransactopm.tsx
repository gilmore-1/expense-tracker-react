import React, { useContext, useState } from "react";
import { SomeContext } from "../App";
function generateID() {
    return Math.floor(Math.random() * 100000000);
}
function AddNewTransaction() {
    const context = useContext(SomeContext);
    const { transactions,setTransactions } = context;
    const [amount, setAmount] = useState(0);
    const [text, setText] = useState("");
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (text.trim() === "" || amount === 0) {
            alert("Please enter valid text and amount");
            return;
        } else {
            const newtransaction = {
                id: generateID(),
                text: text,
                amount: amount
            };
            setTransactions([...transactions, newtransaction]);
        }
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.currentTarget.value)}id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number"  onChange={(e) => setAmount(e.currentTarget.valueAsNumber)}  id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={(e) => handleClick(e)} >Add transaction</button>
            </form>
        </>
    );
}

export default AddNewTransaction;
