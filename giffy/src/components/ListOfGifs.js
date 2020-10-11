import React, { useEffect, useState } from 'react'
import './style/ListOfGifs.css'

import Gif from './Gif'
import getGifs from '../services/getGifs'

export default function ListOfGifs(props) {
   const {params } = props
   const {keyword} = params

   const [gifs, setGifs] = useState([])
   const [loading, setLoading] = useState(false)

   //useEffect cuando se renderiza el componente, se ejecutara una vez ya que no tiene dependencias (no le pasamos variables al array)
   useEffect(() => {
      setLoading(true)
      console.log("actualizando los gifs");
      // setGifs(DIFERENT_GIFS)
      getGifs({ keyword }).then(gifs => {
         setLoading(false)
         setGifs(gifs)
      })
      // cuando cambiamos el prop que sera en el otro componente este volvera a renderizar ejecutando nueva mente gracias a useEffect y pasandole las dependencias que en este caso seria keyword
   }, [keyword])
   // cuando el valor de una dependencia cambie se ejecutara de nuevo useEffect renderizando de nuevo
   if (loading){
      return(
         <div className="Loading">
            Cargando ....
         </div>
      )
   }

   return (
      <>
        { 
            gifs.map((singleGif) =>
               <Gif
                  id={singleGif.id}
                  key={singleGif.id}
                  title={singleGif.title}
                  url={singleGif.url}
               />
            )
         }
      </>
   )
}