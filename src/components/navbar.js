import React from 'react';
import '../css/navbar.css'; // Archivo de estilos CSS para la barra de navegación
import brandImage from '../assets/brand.jpg';

const NavBar = () => {

  /* <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>*/
  return (
    <nav className="navbar">
      <div>
          <img className='brand-image' src={brandImage} alt="Descripción de la imagen" />
      </div>
      
      <ul className="nav-menu">
        
      </ul>
      
    </nav>
  );
};

export default NavBar;