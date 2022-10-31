import { Link } from 'react-router-dom'
import { Container } from '../styled-components/Container'
import { ContainerHome } from '../styled-components/home/ContainerHome'
import { HomeLogin } from '../styled-components/home/HomeLogin'
import { HomeWelcome } from '../styled-components/home/HomeWelcome'

interface Intro {
  title: string
  description: string
  icon: string
}

const text: Intro[] = [
  {
    title: 'Gestiona',
    description: 'Conoce con exactitud cuánto stock tienes, registra la utilización de los reactivos',
    icon: 'bi bi-archive-fill'
  },
  {
    title: 'Controla',
    description: 'Comprueba el estado de los reactivos, evitando la falta de materiales y revisando al instante el intentario',
    icon: '"bi bi-newspaper'
  },
  {
    title: 'Optimiza',
    description: 'Ahorra tiempo perdido buscando los reactivos en el laboratorio',
    icon: 'bi bi-tools'
  },
  {
    title: 'Planifica',
    description: 'Organiza las compras o solicitud de nuevos reactivos en base a las necesidades de tu laborario',
    icon: 'bi bi-pass'
  }
]

export function Home (): JSX.Element {
  return (
    <Container>
      <ContainerHome>
        <HomeLogin>
          <div className='cardHome'>
            <h1>Stocker</h1>
            <h2>libbiq-<span>UN</span></h2>
            <h3>v 1.0.0</h3>
          </div>
          <Link className='btnGoogle' to='form'>
            <i className="bi bi-google"></i>
            <p className='text'>Ingresa con Google</p>
          </Link>
        </HomeLogin>
        <HomeWelcome>
          <div className='cardText'>
            <div>
              <h2 className='welcome'>Bienvenido!</h2>
              <p className='info'>Organizar y gestionar los reactivos no tiene que ser un problema.</p>
            </div>
            <div className='containerInfo'>
              {text.map((item, index) => (
                <div key={index} className='container'>
                  <i className={item.icon}></i>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </HomeWelcome>
      </ContainerHome>
    </Container>
  )
}
export default Home
