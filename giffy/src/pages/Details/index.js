import React ,{useContext} from 'react'
// cual es econtexto que quermos consumir
import staticContext from '../../context/staticContext'
import GifsContext  from '../../context/GifsContext'
import Gif from '../../components/Gif'

import './style.css'

export default function Details (props) {
   // le pasamos como parametro al useContext el contexto que importamos el cual queremos consumir
   const context = useContext(staticContext)
   console.log(context);

   const {gifs} = useContext(GifsContext)

   const gif = gifs.find((singleGif)=> singleGif.id === props.params.id )
   console.log(gif);

   return(
      // de forma inmediata soltamos todos los atributos para renderizar nuestro componente Gif pero siempre y cuando nuestas propiedad sean igualmente escritas d elas propiedad que acepta el componente
      <Gif {...gif}></Gif>
   )
}