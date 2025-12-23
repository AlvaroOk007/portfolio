import './ButtonHamburguer.css'
export function ButtonHamburguer ({ setIsNavBarOpen, isNavBarOpen }) {
  return (
    <div
      className={`btn-hamburguesa ${isNavBarOpen ? 'active' : ''}`}
      onClick={() => setIsNavBarOpen(prev => !prev)}
    >
      <div />
      <div />
      <div />
    </div>

  )
}
