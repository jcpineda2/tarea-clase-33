import { useEffect, useState } from "react"
import { usePeticion } from "./../hooks/usePeticion.js"
import { Carta } from "../componentes/Carta.jsx"

export const Animes = () => {
    const [cantidadAnimes, setCantidadAnimes] = useState(0)
    const [listado, setListado] = useState([])
    const [pagina, setPagina] = useState(1)
    const config = {
        url: "https://api.jikan.moe/v4/anime?page=" + pagina,
        metodo: "GET"
    }

    useEffect(() => {
        usePeticion(config).then(
            r => {
                setListado(r.data)
                setCantidadAnimes(r.data.length)
            }
        )
    },
        [pagina, cantidadAnimes])

    const handleClickSiguiente = () => {
        setPagina((prevPagina) => prevPagina + 1)
    }

    const handleClickAnterior = () => {
        setPagina((prevPagina) => prevPagina === 1 ? 1 : prevPagina-1)
    }
    return (<>
        <h1>Lista de Animes</h1>
        <div>
            {listado.map((articulo, index) => {
                const { title, images } = articulo
                return <Carta key={index}
                    titulo={title}
                    portada={images.jpg.image_url}
                />
            })}
        </div>
        <div style={{
            textAlign: 'center'
        }}>
            <button onClick={handleClickAnterior}>
                Anterior página
            </button>
            <button onClick={handleClickSiguiente}>
                Siguiente página
            </button>
        </div>

    </>)
}