export const usePeticion = ({
    url,
    metodo
})=>{
    return fetch(url,{
        method:metodo
    }).json()
}