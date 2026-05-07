import { useState } from 'react'
import './App.css'
import { usePeticion } from './hooks/usePeticion'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {

  const  [prueba, setPrueba] = useState(0)
  const  [count, setCount] = useState(0)

  async function handleClick() {
    const nuevoCount = count +1
    setCount(nuevoCount)
    
    useLocalStorage({
      opcion:"guardar",
      valor:nuevoCount
    })

    const datos =  await usePeticion({
      url:"https://dragonball-api.com/api/characters",
      metodo: "GET"
    })

    const test = datos.json()

    const urls = test.json()

    useLocalStorage({
      opcion:"guardar",
      valor: urls.items[0].name
    })

    const valorRecuperado = useLocalStorage({
      opcion:"recuperar"
    })

    setPrueba(valorRecuperado)
    return count +1
  }

  return (
    <>

    </>
  )
}

export default App
