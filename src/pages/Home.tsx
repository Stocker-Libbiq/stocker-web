import { Link } from 'react-router-dom'
import { Container } from '../styled-components/Container'
import { ContainerHome } from '../styled-components/home/ContainerHome'
import { HomeLogin } from '../styled-components/home/HomeLogin'
import { HomeWelcome } from '../styled-components/home/HomeWelcome'

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
          <div className='btnGoogle'>
            <h2>g</h2>
            <Link to='login' className='link'>Ingresa con Google</Link>
          </div>
        </HomeLogin>
        <HomeWelcome>
          <div>
            <div>
              <h2>BIENVENIDO!</h2>
              <h3>Organizar y gestionar los reactivos no tiene que ser un problema.</h3>
            </div>
            <div>
              <img src='' />
              <div> {/* todo: hacer este componente reactivo */}
                <h3>Gestiona</h3>
                <p>Conoce con exactitud cuanto stock tienes, registra la utilización de los reactvios</p>
              </div>
            </div>
          </div>
        </HomeWelcome>
      </ContainerHome>
    </Container>
  )
}
export default Home
