import '@/App.css'
import { SectionHome } from '@components/Section-Home/SectionHome'
import { Header } from '@components/Header/Header.jsx'
import { SectionSobreMi } from '@components/Section-sobre-mi/SectionSobreMi'
import { SectionHabilidades } from './components/Section-Habilidades/SectionHabilidades'
export function App () {
  return (
    <main>
      <Header />
      <SectionHome />
      <SectionHabilidades />
      <SectionSobreMi />
    </main>
  )
}
