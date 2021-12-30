import { useTransactions } from "../../Hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();
  
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td> 
                <td className={transaction.type}>
                  {transaction.amount
                  .toLocaleString('pt-br', {
                    style: 'currency', 
                    currency: 'BRL'
                  })}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createAt))}
                </td>
              </tr>
           ))}
        </tbody>
      </table>
    </Container>
  )
}