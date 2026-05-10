import datosPlaceHolder from"./../cache/pagina1.json";
import Axios from "axios"


export const usePeticion = async ({
    url,
    metodo
}) => {
    try {
        // Con fetch
        // const datos = await fetch(url, {
        //     method: metodo
        // })
        // const res = await datos.json()

        // return res
        // Con axios
        if(metodo==="GET"){
            const peticion = await Axios.get(url)
            return peticion.data
        }
    } catch (error) {
        console.log("Luego, veremos");
        return datosPlaceHolder
    }
}