import packages from '../../../assets/package.png'
import packagesMobile from '../../../assets/package_mobile.png'

import styles from './styles.module.css'

export const HomeSection = () => {
  return(
    <section className={styles.container}>
      <div>
        <h1>Sua entrega chegando AMANHÃ!</h1>
        <p>Comprou, chegou.</p>
      </div>
      <picture>
        <source srcSet={packages} media='(min-width: 1150px)' />
        <source srcSet={packagesMobile} media='(max-width: 360px)' />
        <img src='' />
      </picture>
    </section>
  )
}