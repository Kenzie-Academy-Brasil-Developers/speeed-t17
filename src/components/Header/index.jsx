import styles from './styles.module.css'
import logo from '../../assets/logo.svg'
import { Button } from '../Button'

export const Header = () => {
  return(
    <header className={styles.header}>
      <img 
        src={logo} 
        alt="Logo da speeed que é um carrinho de entrega na cor branca e uma letra S em azul" 
      />

      <Button type="button">Cadastre-se</Button>
    </header>
  )
}

// header_dfhlkdss