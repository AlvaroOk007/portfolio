import './ListTecnology.css'
import { CardTecnolog } from './ui/CardTecnology'

export function ListTecnology ({ list, title }) {
  return (
    <>
      <h4 className='list-tecnology__title'>{title}</h4>
      <section className='section__list-tecnology-container'>
        {
          list.map((l, i) => <CardTecnolog tecnology={l} key={i} />)
        }
      </section>
    </>
  )
}
