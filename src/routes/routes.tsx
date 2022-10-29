import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Form from '../pages/Form'

export function Routess (): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/form' element={<Form />} />
    </Routes>
  )
}

export default Routess
