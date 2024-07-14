import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className='navbar'>
        <a href="/">
        <img className='logo-link'
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1e6f2a7a497c173bef046bcf02d4e4f2e1eaa87849764b895623dd135fbd267?"
        />
        </a>

        <ul className='menu'>
        <li><Link to="/" className='menu-link'>Dashboard</Link></li>
        <li><Link to="/crud" className='menu-link'>Administrar</Link></li>
        <li><Link to="/reportes" className='menu-link'>Emitir reportes</Link></li>
        <li><button >Cerrar sesión</button></li>

        </ul>
    </nav>
  )
}

export default Navbar;