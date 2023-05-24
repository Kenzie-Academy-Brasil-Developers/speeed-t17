import styles from './styles.module.css'

import Truck from '../../../assets/truck.png'
import { CardCoverage } from '../../CardCoverage'

export const CoverageSection = () => {
  return(
    <section className={styles.container}>
      <img src={Truck} alt="Foto do caminhão da speed na cor azul piscina" />


      <div>
        <h2>Cobertura</h2>
        <ul className={styles.cards}>
          <CardCoverage>Fácil de acompanhar</CardCoverage>
          <CardCoverage>Envio rápido</CardCoverage>
          <CardCoverage>Diversas formas de pagamento com um preço que cabe no bolso</CardCoverage>
        </ul>
      </div>
    </section>
  )
}

