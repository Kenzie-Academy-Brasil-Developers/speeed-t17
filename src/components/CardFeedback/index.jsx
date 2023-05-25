import styles from './styles.module.css'

export const CardFeedback = ({ name, text, image }) => {
  return (
    <li className={styles.card}>
      <img 
        src={image} 
        alt={`É uma imagem de perfil da pessoa ${name}`} 
      />
      <span>{name}</span>
      <p>{text}</p>
    </li>
  )
}