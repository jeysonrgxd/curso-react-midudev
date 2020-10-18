import React from 'react'
import './style/ListOfGifs.css'

import Gif from './Gif'
export default function ListOfGifs({ gifs, loading }) {

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