const navBar = document.getElementsByClassName('nav-bar-container')[0]
const btnHamburguesa = document.getElementById('btn-hamburguesa')
btnHamburguesa?.addEventListener('click', () => {
  const estaDesplegado = navBar?.classList.toggle('desplegar')
  if(estaDesplegado){
    document.body.style.overflow = 'hidden' 
  }else{
    document.body.style.overflow = 'auto' 
  }
})

navBar.addEventListener('click',()=>{
  navBar?.classList.remove('desplegar')
  document.body.style.overflow = 'auto' 
})