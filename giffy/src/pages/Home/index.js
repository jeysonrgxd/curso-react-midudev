import React, {useState} from 'react'
// traemos useLocation que es un hook wouter
import {Link, useLocation} from 'wouter'
import './style.css'
import Nintendo from'../../images/nintendo.gif'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

export default function Home(){
   const [keyword, setKeyword] = useState('perros')
   //esto es para cambiar de pagina, sacamos sus dos valores que se encuentra en un array, usamos destructuracion
   const [push, pushLocation] = useLocation()

   // para no pasarle ningun valor verifica el hook useGifs
   const {loading, gifs} = useGifs()

   const handleChange = (ev) =>{
      setKeyword(ev.target.value)
   }
   
   const handleSubmit = (ev) =>{
      ev.preventDefault()
      // capturamos el valor del input y utilizamos la funcion pushLocation pasandole la ruta u el valor de lo que buscara
      pushLocation(`/search/${keyword}`)
   }

   return(
      <div className="App-content-menu">
         <div className="nintendo-img">
            <img src={Nintendo} alt=""/>
         </div>
         <form onSubmit={handleSubmit} className="App-content-form">
            <input placeholder="Busca un Gif" onChange={handleChange} value={keyword} type="text"/>
         </form>
         <h2>Ultima Busqueda</h2>
         <div className="App-content-gifs-muestra">
            <ListOfGifs loading={loading} gifs={gifs}/>
         </div>
         <h1>GIPHY</h1>
         <ul>
            <li><Link to="/search/perros">Perros</Link></li>
            <li><Link to="/search/gatos">Gatos</Link></li>
            <li><Link to="/search/patos">Patos</Link></li>
         </ul>
      </div>
   )
}