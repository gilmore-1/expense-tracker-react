import React, { useContext } from 'react'
import { SomeContext } from '../App'

function Balance() {
    const context = useContext(SomeContext)
    const { transactions } = context;

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${transactions.reduce((acc: number, transaction: { amount: number }) => acc + transaction.amount, 0).toFixed(2)}</h1>
            
        </>
    )
}

export default Balance