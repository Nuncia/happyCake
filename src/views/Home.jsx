import BirthdayCake from '../assets/1.png'

const Home = () => {
  return (
    <div className="text-center mt-5">
      <h2>Bienvenido a <strong>Happy Cake</strong></h2>
      <p>El lugar de los pasteles felices</p>
      <div className="contenedor_imagen">
        <img className='imagen' src={BirthdayCake} alt="Cake"/>
      </div>
    </div>
  )
}

export default Home