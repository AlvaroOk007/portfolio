import './SectionHome.css'
import { Linkedln } from '@assets/icons/Linkedln.jsx'
import { GitHub } from '@assets/icons/GitHub.jsx'
import { Download } from '@assets/icons/Download.jsx'
import miFoto from '@assets/images/my-pick/mi-foto-inicio.png'
import { Descripcion } from './ui/Descripcion'
import miCv from '@assets/doc/AlvaroBravo.pdf'

export function SectionHome () {
  return (
    <section className='sectionHome__Contenedor' id='inicio'>
      <div className='circulo'>{}</div>

      <div className='sectionHome__contenido-izquierda'>
        <div className='sectionHome__contenedor-texto-bienvenida'>
          <h2 className='sectionHome__titulo'>¡Hola, Soy Álvaro Bravo!</h2>
          <span className='sectionHome__subtitulo'>
            DESARROLLADOR WEB FULL-STACK JUNIOR
          </span>
          <Descripcion />
        </div>

        <div className='sectionHome__primeros-botones'>
          <button className='boton boton-contactame'>Contactame</button>
          <a className='boton boton-cv' href={miCv} download>
            <Download />
            Curriculum
          </a>
        </div>

        <div className='sectionHome__segundos-botones'>
          <a
            className='icon'
            title='Mi GitHub'
            rel='noreferrer'
            href='https://github.com/AlvaroOk007'
            target='_blank'
          >
            <GitHub />
          </a>

          <a
            className='icon'
            title='Mi LinkedIn'
            href='https://www.linkedin.com/in/inalvarobravo/'
            rel='noreferrer'
            target='_blank'
          >
            <Linkedln />
          </a>
        </div>
      </div>

      <div className='sectionHome__contenido-derecha'>
        <img src={miFoto} />
      </div>
    </section>
  )
}
