import './CardTecnology.css'
export function CardTecnolog ({ tecnology }) {
  return (
    <article className='card-tecnology'>
      <div className='card-tecnology__container'>
        <div className='card-tecnology__img-container'>
          <img
            src={new URL(`../../../../assets/images/icons/${tecnology.link}`, import.meta.url).href}
            alt={tecnology.name}
            style={{ animation: tecnology.animation ? `${tecnology.animation} 10s linear infinite` : 'none' }}
          />
        </div>
        <h3 className='card-tecnology__title'>{tecnology.title}</h3>
      </div>
      <div className='content-rotate'>+{tecnology.experience}</div>
    </article>
  )
}
