import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../service/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>; // ou pick

interface TransactionsProviderProps {
  children: ReactNode; // para receber qualquer coisa no Jsx
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions') // '/' opcional 
    .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) { // sempre retorna uma promise
    const response = await api.post('/transactions', {
      ...transactionInput,
      createAt: new Date(),
    })
    const { transaction } = response.data;
  
    setTransactions([
      ...transactions,
      transaction,
    ]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context
}