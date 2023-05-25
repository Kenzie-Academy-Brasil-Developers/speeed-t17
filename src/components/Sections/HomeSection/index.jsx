import packages from '../../../assets/package.png'

import styles from './styles.module.css'

export const HomeSection = () => {
  return(
    <section className={styles.container}>
      <div>
        <h1>Sua entrega chegando AMANHÃ!</h1>
        <p>Comprou, chegou.</p>
      </div>
      <img src={packages} alt="Pacotes de entrega caindo" />
    </section>
  )
}