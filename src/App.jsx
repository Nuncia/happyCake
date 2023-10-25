import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';

import './App.css'
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';

function App() {

  return (
    <>
     <header>
      <NavBar/>
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
      <Route
        path='*'
        element={<NotFound/>}
      />
     </Routes>
     
    </>
  )
}

export default App
