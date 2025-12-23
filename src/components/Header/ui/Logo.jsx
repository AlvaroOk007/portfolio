import './Logo.css'
export function Logo () {
  return (
    <div className='header__contenedor-logo'>
      <a className='header__logo' href='#'>
        <span className='signo'> {'<'} </span>
        <span className='logo'>AB</span>
        <span className='signo'> {'/>'} </span>
      </a>
    </div>
  )
}
