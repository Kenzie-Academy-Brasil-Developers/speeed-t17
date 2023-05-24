import styles from './styles.module.css'

export const CardCoverage = ({ children }) => {
  return <li className={styles.card}>{children}</li>
}