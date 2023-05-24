import packages from '../../../assets/package.png'

export const HomeSection = () => {
  return(
    <section>
      <div>
        <h1>Sua entrega chegando AMANHÃ!</h1>
        <p>Comprou, chegou.</p>
      </div>
      <img src={packages} alt="Pacotes de entrega caindo" />
    </section>
  )
}