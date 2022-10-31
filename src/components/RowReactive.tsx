import { Link } from 'react-router-dom'
import reactiveLocalStorage from '../@types/types'
import {ListReactive} from '../styled-components/home/ListReactive'

interface reactiveInterface {
  cas: string
  sku: string
  name: string
  clasification: string
  brand: string
  content: string
  um: string
  id: string
}
let arrayReactives: reactiveLocalStorage[]

function RowReactive ({ reactive }: any, listState: JSX.Element[]): JSX.Element {
  const { cas, sku, name, clasification, brand, content, um, id }: reactiveInterface = reactive

  function deleteReactive (id: string): void {
    arrayReactives = JSON.parse(localStorage.getItem('reactive') as string)
    for (let i = 0; i < arrayReactives.length; i++) {
      if (arrayReactives[i].id === id){
        arrayReactives.splice(i, 1)
        console.log(arrayReactives)
        localStorage.removeItem('reactive')
        localStorage.setItem('reactive', JSON.stringify(arrayReactives))
        window.location.reload()
      }
    }
  }

  return (
    <ListReactive>
      <div>
        <table>
          <thead>
            <tr>
              <th>CAS</th>
              <th>SKU</th>
              <th>NOMBRE</th>
              <th>CLASIFICACION</th>
              <th>MARCA</th>
              <th>CONTENIDO</th>
              <th>UM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cas}</td>
              <td>{sku}</td>
              <td>{name}</td>
              <td>{clasification}</td>
              <td>{brand}</td>
              <td>{content}</td>
              <td>{um}</td>
            </tr>
              <Link to={`/edit/${id}`} className='editButton'>Editar</Link>
              <button onClick={() => deleteReactive(id)} className='delete'>Eliminar</button>
          </tbody>
        </table>
      </div>
    </ListReactive>
  )
}

export default RowReactive
