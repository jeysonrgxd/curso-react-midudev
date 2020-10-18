import React, { useState } from 'react'

const Context = React.createContext({})

// creamos nuestro propio provider y meterle la informacion que nosotros queremos, en este caso creamos un estado que podra recupera datos y actualizarlo desde los componentes que nostros queramos
export function GifsContextProvider ({children}){
   const [gifs, setGifs] = useState([])
   return (
      // devolbemos un obejto que contengasn el gifs y setGifs
      <Context.Provider value={{gifs,setGifs}}>
         {children}
      </Context.Provider>
   )
}
// exportamos esto ya que lo nesesitamos cuando queremos consumir este contexto, que adiferencia de la otra exportacion el cuals era usado para proveer
export default Context