import { Link } from 'react-router-dom'
import { Container } from '../styled-components/Container'

export function Login (): JSX.Element {
  return (
    <Container>
      <div>
        <h2>Inicio de Sesion</h2>
        <div>
          <label>Usuario</label>
          <input type='text' name='user' id='user' />
          <label>Contraseña</label>
          <input type='password' name='pass' id='name' />
        </div>
        <Link to='/form'>Ingresar</Link>
        <h3>Olvide mi contraseña</h3>
      </div>
    </Container>
  )
}
export default Login
