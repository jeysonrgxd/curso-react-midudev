import React from 'react'
import './style/Gif.css'
import {Link} from 'wouter'
// recibimos el objeto props y lo destructuramos para poder utilizar de manera declarativa los atributos del objeto (props)
export default function Gif({id,title,url}) {
   return (
      <div className="itemGif" key={id}>
         <h4>{title}</h4>
         <small>{id}</small>
         <p><Link to={`/gif/${id}`}><img alt={title} src={url} /></Link></p>
      </div>
   )
}