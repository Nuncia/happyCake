import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Contacts from '../assets/3.png';
import Home from '../assets/2.png';
import ShortCake from '../assets/4.png';

const NavBar = () => {
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
              <a style={{textDecoration: 'none'}}><Navbar.Brand style={{color: 'white', fontWeight: 800}}>Happy Cake</Navbar.Brand>
              <img className="marca" src={ShortCake} alt="Cake" /></a>
              </div>
    </Navbar>
  )
}

export default NavBar