import './NavBar.css'
import { navBarItems } from '@/constants/navBarItems.js'
import { useActiveSection } from '@/hooks/useActiveSesion.jsx'

export function NavBar ({ isNavBarOpen, setIsNavBarOpen }) {
  const activeSection = useActiveSection(
    navBarItems.map(item => item.id)
  )

  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsNavBarOpen(false)
  }

  return (
    <nav
      className={`navbar__contenedor ${
        isNavBarOpen ? 'navbar__contenedor--open' : ''
      }`}
    >
      <ul className='navbar__contenedor-lista'>
        {navBarItems.map(({ id, label }) => (
          <li
            key={id}
            onClick={() => handleScroll(id)}
            className={`navbar__contenedor-lista-item ${
              activeSection === id ? 'active' : 'not-active'
            }`}
          >
            <div className='budge'>{}</div>
            {label}
          </li>
        ))}
      </ul>
    </nav>
  )
}
