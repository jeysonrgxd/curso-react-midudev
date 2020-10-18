import React from 'react'

//para crear un contect llamamos a React.createContext
// este es el objeto magico que me tienes que crear como valor inicial de mi context
// el contexto tiene dos partes un consumidor y un proveedor
const Context = React.createContext({
   // estos valores sera leidos cuando un componente no tiene acceso al provides osea cuando no se encuentra encapsulada por <staticContext.Provide></staticContext.Provide>
   name:'jeyson',
   suscribeteAlCanal: true
}) 

// aca devolvemos el consumidor el provider
export default Context