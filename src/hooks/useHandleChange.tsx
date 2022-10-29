import { useState } from 'react'

function useHandleChange (): any {
  const [inputName, setInputName] = useState<String>('')

  function handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.name === 'cas'){
      setInputName(e.target.value)
    }
    if (e.target.name === 'sku'){
      setInputName(e.target.value)
    }
    if (e.target.name === 'name'){
      setInputName(e.target.value)
    }
    if (e.target.name === 'clasification'){
      setInputName(e.target.value)
    }
    if (e.target.name === 'brand'){
      setInputName(e.target.value)
    }
    if (e.target.name === 'content'){
      setInputName(e.target.value)
    }
    if (e.target.name === 'um'){
      setInputName(e.target.value)
    }
  }
  return { handleChange, inputName }
}

export default useHandleChange
