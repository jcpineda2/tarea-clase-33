import { useState } from 'react'
import './App.css'
import { usePeticion } from './hooks/usePeticion'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {

  const [prueba, setPrueba] = useState(0)
  const [count, setCount] = useState(0)

  async function handleClick() {
    const nuevoCount = count + 1
    setCount(nuevoCount)

    useLocalStorage({
      opcion: "guardar",
      valor: nuevoCount
    })

    usePeticion({
      url: "https://dragonball-api.com/api/characters",
      metodo: "GET"
    }).then(
      resultado => {
        console.log("resultado", resultado)

        useLocalStorage({
          opcion: "guardar",
          valor: resultado.items[0].name
        })
      }
    )



    const valorRecuperado = useLocalStorage({
      opcion: "recuperar"
    })

    setPrueba(valorRecuperado)
    return count + 1
  }

  return (
    <>
      <div className="card">

        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
