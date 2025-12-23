import './NavBar.css'
export function NavBar ({ isNavBarOpen, setIsNavBarOpen }) {
  return (
    <nav className={`navbar__contenedor ${isNavBarOpen ? 'navbar__contenedor--open' : ''} `}>
      <ul className='navbar__contenedor-lista' onClick={() => setIsNavBarOpen(false)}>
        <li className='navbar__contenedor-lista-item'>Sobre mí</li>
        <li className='navbar__contenedor-lista-item'>Proyectos</li>
        <li className='navbar__contenedor-lista-item'>Habilidades</li>
        <li className='navbar__contenedor-lista-item'>Contacto</li>
      </ul>
    </nav>
  )
}
