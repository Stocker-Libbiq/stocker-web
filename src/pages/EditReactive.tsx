import { useEffect, useState } from 'react'
import { Params, useParams } from 'react-router-dom'
import reactiveLocalStorage from '../@types/types'
import useHandleChange from '../hooks/useHandleChange'
import { ListReactive } from '../styled-components/home/ListReactive'

function EditReactive (): JSX.Element {
  const { inputName: cas, handleChange: handleChangeCas, setInputName: setInputCas } = useHandleChange()
  const { inputName: sku, handleChange: handleChangeSku, setInputName: setInputSku } = useHandleChange()
  const { inputName: name, handleChange: handleChangeName, setInputName } = useHandleChange()
  const { inputName: clasification, handleChange: handleChangeClasification, setInputName: setInputClasification } = useHandleChange()
  const { inputName: brand, handleChange: handleChangeBrand, setInputName: setInputBrand } = useHandleChange()
  const { inputName: content, handleChange: handleChangeContent, setInputName: setInputContent } = useHandleChange()
  const { inputName: um, handleChange: handleChangeUm, setInputName: setInputUm } = useHandleChange()
  const [reactivo, setReactivo] = useState<reactiveLocalStorage>()

  const params: Readonly<Params> = useParams()

  useEffect(() => {
    if (localStorage.length > 0){
      const localStorag = JSON.parse(localStorage.getItem('reactive'))
      const reactive: reactiveLocalStorage[] = localStorag.filter((reactiv) => {
        return reactiv.id === params.id
      })
      setReactivo(reactive[0])
      setInputCas(reactive[0].cas)
      setInputSku(reactive[0].sku)
      setInputName(reactive[0].name)
      setInputClasification(reactive[0].clasification)
      setInputBrand(reactive[0].brand)
      setInputContent(reactive[0].content)
      setInputUm(reactive[0].um)
    }
  }, [])

  function editReactive (): void{
    const editRct: reactiveLocalStorage = {
      cas,
      sku,
      name,
      clasification,
      brand,
      content,
      um,
      id: reactivo.id
    }

    setReactivo(editRct)
    const arrayRct: reactiveLocalStorage[] = JSON.parse(localStorage.getItem('reactive'))
    const newArrayReactive: reactiveLocalStorage[] = arrayRct.map((reactiv: reactiveLocalStorage) => {
      return reactiv.id === params.id ? editRct : reactiv
    })
    localStorage.removeItem('reactive')
    localStorage.setItem('reactive', JSON.stringify(newArrayReactive))
  }

  return (
    <ListReactive>
      <div className='editContainer'>
        <input type='text' name='cas' id='cas' placeholder='CAS' value={cas} onChange={handleChangeCas}/>
        <input type='text' name='sku' id='sku' placeholder='SKU' value={sku} onChange={(e) => handleChangeSku(e)}/>
        <input type='text' name='name' id='mame' placeholder='NOMBRE' value={name} onChange={(e) => handleChangeName(e)}/>
        <input type='text' name='clasification' id='clasification' placeholder='CLASIFICACIÓN' value={clasification} onChange={(e) => handleChangeClasification(e)}/>
        <input type='text' name='brand' id='brand' placeholder='MARCA' value={brand} onChange={(e) => handleChangeBrand(e)}/>
        <input type='text' name='content' id='content' placeholder='CONTENIDO' value={content} onChange={(e) => handleChangeContent(e)}/>
        <input type='text' name='um' id='um' placeholder='UM' value={um} onChange={(e) => handleChangeUm(e)}/>
        <button onClick={editReactive} className='edit'>Editar</button>
      </div>
    </ListReactive>
  )
}

export default EditReactive
