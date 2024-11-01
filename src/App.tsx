import React, { createContext } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TaransactionList from './components/TaransactionList'
import AddNewTransactopm from './components/AddNewTransactopm'
import { TransactionInterface,TransactionContextInterface } from './types';

export const SomeContext = createContext<TransactionContextInterface>({
  transactions: [],
  setTransactions: () => {}
})
function App() {
  const [transactions, setTransactions] = React.useState<TransactionInterface[]>([
    {
      id: 1,
      text: 'Flower',
      amount: -20
    },
    {
      id: 2,
      text: 'Salary',
      amount: 300
    },
    {
      id: 3,
      text: 'Book',
      amount: -10
    },
    {
      id: 4,
      text: 'Camera',
      amount: 150
    }
  ]
  )

  return (
    <>
      <SomeContext.Provider value={{transactions, setTransactions}}>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TaransactionList />
          <AddNewTransactopm />
        </div>
      </SomeContext.Provider>
    </>
  )
}

export default App

