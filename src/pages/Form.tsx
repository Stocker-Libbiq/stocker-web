import { Container } from '../styled-components/Container'
import useHandleChange from '../hooks/useHandleChange'
import { useEffect, useState } from 'react'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'

export function Form (): JSX.Element {
  const { inputName: cas, handleChange: handleChangeCas } = useHandleChange()
  const { inputName: sku, handleChange: handleChangeSku } = useHandleChange()
  const { inputName: name, handleChange: handleChangeName } = useHandleChange()
  const { inputName: clasification, handleChange: handleChangeClasification } = useHandleChange()
  const { inputName: brand, handleChange: handleChangeBrand } = useHandleChange()
  const { inputName: content, handleChange: handleChangeContent } = useHandleChange()
  const { inputName: um, handleChange: handleChangeUm } = useHandleChange()

  const id = uniqid()
  const [items, setItems] = useState<reactiveLocalStorage[]>([])
  const reactiveArray: reactiveLocalStorage[] = []
  let reactive: reactiveLocalStorage

  interface reactiveLocalStorage {
    cas: string
    sku: string
    name: string
    clasification: string
    brand: string
    content: string
    um: string
    id: string
  }

  useEffect(() => {
    if (localStorage.length > 0){
      const localStorag = JSON.parse(localStorage.getItem('reactive') as string)
      setItems(localStorag)
    }
  }, [])
  useEffect(() => {
    localStorage.removeItem('reactive')
    localStorage.setItem('reactive', JSON.stringify(items))
  }, [items])

  function handleClick (e: React.MouseEvent<HTMLButtonElement>): void{
    e.preventDefault()
    reactive = {
      cas,
      sku,
      name,
      clasification,
      brand,
      content,
      um,
      id
    }
    reactiveArray.push(...items, reactive)
    setItems(reactiveArray)
  }

  return (
    <Container>
      <div>
        <h2>AGREGAR REACTIVO</h2>
        <Link className='list' to='/listReactive'>Lista de Reactivos</Link>
      </div>
      <div>
        <input type='text' name='cas' id='cas' placeholder='CAS' value={cas} onChange={handleChangeCas}/>
        <input type='text' name='sku' id='sku' placeholder='SKU' value={sku} onChange={(e) => handleChangeSku(e)}/>
        <input type='text' name='name' id='mame' placeholder='NOMBRE' value={name} onChange={(e) => handleChangeName(e)}/>
        <input type='text' name='clasification' id='clasification' placeholder='CLASIFICACIÓN' value={clasification} onChange={(e) => handleChangeClasification(e)}/>
        <input type='text' name='brand' id='brand' placeholder='MARCA' value={brand} onChange={(e) => handleChangeBrand(e)}/>
        <input type='text' name='content' id='content' placeholder='CONTENIDO' value={content} onChange={(e) => handleChangeContent(e)}/>
        <input type='text' name='um' id='um' placeholder='UM' value={um} onChange={(e) => handleChangeUm(e)}/>
        <button className='button' onClick={(e) => handleClick(e)}>Anadir Reactivo</button>
      </div>
    </Container>
  )
}
export default Form
