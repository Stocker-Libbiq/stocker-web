import { Container } from '../styled-components/Container'
import useHandleChange from '../hooks/useHandleChange'
import { useEffect, useState } from 'react'

export function Form (): JSX.Element {
  const { input: cas, handleChange: handleChangeCas } = useHandleChange()
  const { input: sku, handleChange: handleChangeSku } = useHandleChange()
  const { input: name, handleChange: handleChangeName } = useHandleChange()
  const { input: clasification, handleChange: handleChangeClasification } = useHandleChange()
  const { input: brand, handleChange: handleChangeBrand } = useHandleChange()
  const { input: content, handleChange: handleChangeContent } = useHandleChange()
  const { input: um, handleChange: handleChangeUm } = useHandleChange()

  const [items, setItems] = useState<reactiveLocalStorage[]>([])

  interface reactiveLocalStorage {
    reactive: {
      cas: String
      sku: String
      name: String
      clasification: String
      brand: String
      content: String
      um: String
    }
  }

  useEffect(() => {
    console.log(items)
    console.log(cas)
  }, [items])

  function handleClick (e: React.MouseEvent<HTMLButtonElement>): void{
    e.preventDefault()
    setItems(
      [
        cas,
        sku,
        name,
        clasification,
        brand,
        content,
        um
      ]
    )
  }

  return (
    <Container>
      <div>
        <h2>AGREGAR REACTIVO</h2>
      </div>
      <div>
        <input type='text' name='cas' id='cas' placeholder='CAS' value={cas} onChange={(e) => handleChangeCas(e)}/>
        <input type='text' name='sku' id='sku' placeholder='SKU' value={sku} onChange={(e) => handleChangeSku(e)}/>
        <input type='text' name='name' id='mame' placeholder='NOMBRE' value={name} onChange={(e) => handleChangeName(e)}/>
        <input type='text' name='clasfication' id='clasification' placeholder='CLASIFICACIÓN' value={clasification} onChange={(e) => handleChangeClasification(e)}/>
        <input type='text' name='brand' id='brand' placeholder='MARCA' value={brand} onChange={(e) => handleChangeBrand(e)}/>
        <input type='text' name='content' id='content' placeholder='CONTENIDO' value={content} onChange={(e) => handleChangeContent(e)}/>
        <input type='text' name='um' id='um' placeholder='UM' value={um} onChange={(e) => handleChangeUm(e)}/>
        <button onClick={(e) => handleClick(e)}>Anadir Reactivo</button>
      </div>

      <div>
        <p>tabla</p>
      </div>
    </Container>
  )
}
export default Form
