// importamos los hooks
import React from 'react';
import { Route } from 'wouter'
// importamos paginas de componentes
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Deatils from './pages/Details'
// importamos assets
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-content">  
        {/* <ListOfGifs keyword={keyword}></ListOfGifs> */}
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
      </section>

    </div>
  );
}

export default App;
