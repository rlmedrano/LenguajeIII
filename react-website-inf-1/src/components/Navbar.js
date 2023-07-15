import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import "../components/Navbar.css";
import "../components/HeroSection.css";
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout} = useAuth0();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
      setClick(false); // Cerrar menú móvil cuando se oculta el botón
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleLogin = () => {
    if (isAuthenticated) {
      logout(); // Cerrar sesión si el usuario está autenticado
    } else {
      loginWithRedirect(); // Redirigir al inicio de sesión si el usuario no está autenticado
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GRUPO 4<i className="fa-brands fa-codepen"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/recetas' className='nav-links' onClick={closeMobileMenu}>
                Recetas
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}>
                Blogs
              </Link>
            </li>
            <li className='nav-item'>
              {isAuthenticated ? (
                <Link to='/' className='nav-links-mobile' onClick={handleLogin}>
                  Logout
                </Link>
              ) : (
                <Link to='/signup' className='nav-links-mobile' onClick={handleLogin}>
                  Sign Up
                </Link>
              )}
            </li>
          </ul>
          {button && (
            <Button buttonStyle='btn--outline' onClick={handleLogin}>
              {isAuthenticated ? 'Logout' : 'Sign Up'}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
