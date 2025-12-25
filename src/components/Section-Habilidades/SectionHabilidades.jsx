import { ListTecnology } from './lista-tecnology/ListTecnology'
import './SectionHabilidades.css'
import { listSkillsFrontend } from '../../constants/listSkillsFrontend'
import { TitleSection } from '../TitleSection/TitleSection.jsx'
import { listSkillsFrontendDesign } from '../../constants/listSkillsFrontendDesign.js'
import { listSkillsBackend } from '../../constants/listSkillsBackend.js'
import { listSkillsDevops } from '../../constants/listSkillsDevops.js'
export function SectionHabilidades () {
  return (
    <section className='section__list-all-skills-container' id='habilidades'>
      <TitleSection text='HABILIDADES' />
      {/* Lista de habilidades en frontend */}
      <ListTecnology title='Frontend' list={listSkillsFrontend} />

      {/* Lista de habilidades en diseño */}
      <ListTecnology title='Diseño' list={listSkillsFrontendDesign} />

      {/* Lista de habilidades en backend */}
      <ListTecnology title='Backend' list={listSkillsBackend} />

      {/* Lista de habilidades Devops */}

      <ListTecnology title='DevOps' list={listSkillsDevops} />

      {/* Elipse */}
      <div className='elipse-habilidades' />
    </section>
  )
}
