import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Form from '../pages/Form'
import EditReactive from '../pages/EditReactive'
import ListViewReactive from '../pages/ListViewReactive'

export function Routess (): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/form' element={<Form />} />
      <Route path='/edit/:id' element={<EditReactive />} />
      <Route path='/listReactive' element={<ListViewReactive />} />
    </Routes>
  )
}

export default Routess
