import logoImg from '../../assets/Logo.svg';

import { Container, Content } from './styles';
interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return(
    <Container>
      <Content>
        <header>
          <img src={logoImg} alt="control money" />
          <button 
            type="button" 
            onClick={onOpenNewTransactionModal}
            >
            Nova transação
          </button>
        </header>
      </Content>
    </Container>
  )
}