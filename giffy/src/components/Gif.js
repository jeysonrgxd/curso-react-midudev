import React from 'react'
import './style/Gif.css'
// recibimos el objeto props y lo destructuramos para poder utilizar de manera declarativa los atributos del objeto (props)
export default function Gif({id,title,url}) {
   return (
      <div className="itemGif" key={id}>
         <h4>{title}</h4>
         <small>{id}</small>
         <p><a href=""><img alt={title} src={url} /></a></p>
      </div>
   )
}