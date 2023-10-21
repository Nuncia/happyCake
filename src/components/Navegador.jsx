import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Contacts from '../assets/contacts.192x256.png';
import Home from '../assets/house-building.241x256.png';
import ShortCake from '../assets/Iconarchive-Fat-Sugar-Food-Cake.512.png';

const Navegador = () => {
  return (
    <Navbar
        className='navbar'   
    >
              <div style={{display: 'flex'}}>
                <Link
                    to="/"
                    className="text-white ms-3 text-decoration-none"
                >
                    <img className='home' src={Home} alt="" />
                    Home
                </Link>
                <Link
                    to="/contacto"
                    className="text-white ms-3 text-decoration-none"
                >
                    <img className='contacto' src={Contacts} alt=""/>
                    Contacto
                </Link>
              </div>
              <div>
              <Navbar.Brand style={{color: 'white', fontWeight: 800}}>Happy Cake</Navbar.Brand>
              <img className="marca" src={ShortCake} alt="" />
              </div>
    </Navbar>
  )
}

export default Navegador