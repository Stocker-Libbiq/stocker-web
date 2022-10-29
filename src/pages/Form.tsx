import { useState } from 'react'
import { Container } from '../styled-components/Container'

export function Form (): JSX.Element {
  const [cas, setCas] = useState()
  const [sku, setSku] = useState()
  const [name, setName] = useState()
  const [clasification, setClasification] = useState()
  const [brand, setBrand] = useState()
  const [content, setContent] = useState()
  const [um, setUm] = useState()

  return (
    <Container>
      <div>
        <h2>AGREGAR REACTIVO</h2>
      </div>
      <div>
        <input type='text' name='cas' id='cas' placeholder='CAS' />
        <input type='text' name='sku' id='sku' placeholder='SKU' />
        <input type='text' name='name' id='mame' placeholder='NOMBRE' />
        <input type='text' name='clasfication' id='clasification' placeholder='CLASIFICACIÓN' />
        <input type='text' name='brand' id='brand' placeholder='MARCA' />
        <input type='text' name='content' id='content' placeholder='CONTENIDO' />
        <input type='text' name='um' id='um' placeholder='UM' />
      </div>

      <div>
        <p>tabla</p>
      </div>
    </Container>
  )
}
export default Form
