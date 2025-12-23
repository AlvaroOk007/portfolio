import { TitleSection } from '../TitleSection/TitleSection'
import './SectionSobreMi.css'
import fotoCalicatura from '@assets/images/my-pick/mi-foto-calicatura.png'
export function SectionSobreMi () {
  return (
    <section className='sectionSobreMi__contenedor'>
      <TitleSection text='SOBRE MI' />
      <div className='sectionSobreMi__contenedor-secundario'>
        <div className='sectionSobreMi__contendor-imagen'>
          <img src={fotoCalicatura} />
        </div>
        <div className='sectionSobreMi__contenedor-textos'>
          <ul className='sectionSobreMi__lista'>
            <li>
              <h2>¿Quién Soy?</h2>
              <p>Soy Alvaro, Estudiante de la tecnicatura universitaria en programacion,
                actualmente cursando mis ultimas dos materias.
              </p>
            </li>
            <li>
              <h2>¿De dónde soy?</h2>
              <p>Soy de Santiago del Estero, pero actualmente me encuentro en la provincia de BS. AS.</p>
            </li>
            <li>
              <h2>¿Experiencia Laboral?</h2>
              <p>Estoy en busca de mi primer experiencia laboral, actualmente cuento con proyectos académicos y personales.</p>
            </li>
            <li>
              <h2>¿Edad?</h2>
              <p>Actualmente tengo 25 años.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
