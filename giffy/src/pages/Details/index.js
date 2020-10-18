import React from 'react'
import './style.css'

export default function Details (props) {
   return(
      <h1>Estas buscando el gif de {props.params.id}</h1>
   )
}