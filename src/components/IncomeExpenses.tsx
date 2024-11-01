import React, { useContext } from 'react'
import { SomeContext } from '../App'

const IncomeExpenses: React.FC = () => {
    const context = useContext(SomeContext)
    const { transactions } = context;
 

    const income = transactions
        .filter((transaction: { amount: number }) => transaction.amount > 0)
        .reduce((acc: number, transaction: { amount: number }) => (acc += transaction.amount), 0)
        .toFixed(2)

    const expense = transactions
        .filter((transaction: { amount: number }) => transaction.amount < 0)
        .reduce((acc: number, transaction: { amount: number }) => (acc += transaction.amount), 0)
        .toFixed(2)

    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus">+${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">-${Math.abs(Number(expense)).toFixed(2)}</p>
                </div>
            </div>
        </>
    )
}

export default IncomeExpenses