import styles from './styles.module.css'
import logo from '../../assets/logo.svg'

export const Header = () => {
  return(
    <header className={styles.header}>
      <img 
        src={logo} 
        alt="Logo da speeed que é um carrinho de entrega na cor branca e uma letra S em azul" 
      />

      <button>Cadastre-se</button>
    </header>
  )
}

// header_dfhlkdss