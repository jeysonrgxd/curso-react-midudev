// importamos los hooks
import React, { useEffect, useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import { Link ,Route } from 'wouter'

// const GIFS = [
//   'https://media0.giphy.com/media/hQGwNDkBZedmU/200w.webp?cid=ecf05e47jyrwyi4m0z7aj2we6grmzzr0f39vfmkxsc3wmrf3&rid=200w.webp',
//   'https://media3.giphy.com/media/eXKUC4ic17m7u/200w.webp?cid=ecf05e47jyrwyi4m0z7aj2we6grmzzr0f39vfmkxsc3wmrf3&rid=200w.webp'
// ]

// const DIFERENT_GIFS = [
//   'https://media2.giphy.com/media/lmFm5QZMzdmQ8/200w.webp?cid=ecf05e47hxgw5o2endrz1fv4idu3rjoh63vrbckxnvheu8iu&rid=200w.webp'
// ]

function App() {
  const [keyword, setKeyword] = useState('Brazil')
  return (
    <div className="App">
      {/* <button onClick={() => setKeyword('Peru')}>Cambiar</button> */}
      <section className="App-content">
        <div className="App-content-menu">
          <h1>App</h1>
          <ul>
            <li><Link to="/gif/perros">Perros</Link></li>
            <li><Link to="/gif/gatos">Gatos</Link></li>
            <li><Link to="/gif/patos">Patos</Link></li>
          </ul>
        </div>
        {/* <ListOfGifs keyword={keyword}></ListOfGifs> */}
        <Route
          path="/gif/:keyword"
          component={ListOfGifs}
        />
      </section>

    </div>
  );
}

export default App;
