export interface TransactionInterface {
    id: number;
    text: string;
    amount: number;
  }
  export interface TransactionContextInterface {
    transactions: TransactionInterface[];
    setTransactions: React.Dispatch<React.SetStateAction<TransactionInterface[]>>;
  }