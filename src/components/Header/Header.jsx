import { NavBar } from '@components/Nav-bar/NavBar.jsx'
import './Header.css'
import { Logo } from './ui/Logo'
import { ButtonHamburguer } from './ui/ButtonHamburguer/ButtonHamburguer.jsx'
import { ButtonThemeMode } from './ui/ButtonThemeMode/ButtonThemeMode.jsx'
import { useState } from 'react'
export function Header () {
  // Estado para mostrar el navbar en modo hamburguesa
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  return (
    <>
      <header className='header__contenedor'>
        <Logo />
        <div className='header__contenedor-nav'>
          <ButtonThemeMode />
          <ButtonHamburguer setIsNavBarOpen={setIsNavBarOpen} isNavBarOpen={isNavBarOpen} />
          <NavBar isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} />
        </div>
      </header>
    </>
  )
}
