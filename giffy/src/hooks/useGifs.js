import {useState,useEffect,useContext} from 'react'
import getGifs from '../services/getGifs'
import GifsContent  from '../context/GifsContext'

// creamos nuestro custom hooks
export function useGifs ({keyword} = {keyword:null}) {
   // const [gifs, setGifs] = useState([])
   // esto actualiza el estado local
   const [loading, setLoading] = useState(false)
   // actualizaremos el estado global
   const {gifs, setGifs} = useContext(GifsContent)

   //useEffect cuando se renderiza el componente, se ejecutara una vez ya que no tiene dependencias (no le pasamos variables al array)
   useEffect(() => {
      setLoading(true)
      console.log("actualizando los gifs");
      // recuperamos el keyword del localstorage
      const keywordToUse = keyword || localStorage.getItem("lastKeyword") || 'random'

      // setGifs(DIFERENT_GIFS)
      getGifs({ keyword : keywordToUse }).then(gifs => {
         setLoading(false)
         setGifs(gifs)
         localStorage.setItem("lastKeyword",keyword)
      })
      // cuando cambiamos el prop que sera en el otro componente este volvera a renderizar ejecutando nueva mente gracias a useEffect y pasandole las dependencias que en este caso seria keyword
   }, [keyword, setGifs])
   // cuando el valor de una dependencia cambie se ejecutara de nuevo useEffect renderizando de nuevo

   return {gifs,loading}
}