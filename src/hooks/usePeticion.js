import datosPlaceHolder from"./../cache/pagina1.json";

export const usePeticion = async ({
    url,
    metodo
}) => {
    try {
        const datos = await fetch(url, {
            method: metodo
        })
        const res = await datos.json()

        return res
    } catch (error) {
        console.log("Luego, veremos");
        return datosPlaceHolder
    }
}