export const usePeticion = async({
    url,
    metodo
})=>{
    const datos = await fetch(url,{
        method:metodo
    })
    const res = await datos.json()

    return res
}