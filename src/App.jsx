import { Routes, Route } from 'react-router-dom';
import Navegador from './components/Navegador';
import Home from './views/Home';

import './App.css'
import Contacto from './views/Contacto';

function App() {

  return (
    <>
     <header>
     <Navegador/>
     </header>
     <Routes>
      <Route
        path='/'
        element={<Home/>}
      />
      <Route
        path='/contacto'
        element={<Contacto/>}
      />
     </Routes>
     
    </>
  )
}

export default App
