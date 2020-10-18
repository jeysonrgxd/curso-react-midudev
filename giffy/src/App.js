// importamos los hooks
import React from 'react';
import { Route } from 'wouter'
// importamos paginas de componentes
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Deatils from './pages/Details'
// importamos el contexto
import staticContext from './context/staticContext'
import { GifsContextProvider} from './context/GifsContext'
// importamos assets
import './App.css';

function App() {
  return (
    // acemos que toda nuestra aplicacion tenga la posibilidad de utilizar este provedor
    // todos los componentes que estan por de bajo envuento por el provider tendra acceco al context
    <staticContext.Provider value={
      // recordar podemos pasarle cualquier valor no solo un objeto
      {
        name:"Jeyson",
        acceso:"tienes acceso"

      }
    }>
      <div className="App">
        <section className="App-content">  
          {/* <ListOfGifs keyword={keyword}></ListOfGifs> */}
          {/* envolvemos con nuesto contexto creado alas rutas de componentes para utilizar los datos */}
          <GifsContextProvider>
            <Route
              path="/search/:keyword"
              component={SearchResults}
            />
            <Route
              path="/"
              component={Home}
            />
            <Route
              component={Deatils}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>

      </div>
    </staticContext.Provider>
  );
}

export default App;
