import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Peliculas } from './components/Peliculas'

function App() {
  const [page, setPage] = useState(1)

  function handleAnterior(){
    if(page===1){
      return;
    }else{
      setPage(page-1)
    }
  }

  function handleSiguiente(){
    if(page===100){
      return;
    }else{
      setPage(page+1)
    }
  }

  return (
    <div className="App">
      <h2>Peliculas populares</h2>
      <button onClick={handleAnterior}>Anterior</button>
      <button onClick={handleSiguiente}>Siguiente</button>
      <Peliculas
        page = {page}
      />
      <button onClick={handleAnterior}>Anterior</button>
      <button onClick={handleSiguiente}>Siguiente</button>
    </div>
  )
}

export default App
