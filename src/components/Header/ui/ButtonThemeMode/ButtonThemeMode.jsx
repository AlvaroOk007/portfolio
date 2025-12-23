import { MoonIcon } from '../../../../assets/Icons/MoonIcon'
import './ButtonThemeMode.css'
export function ButtonThemeMode ({ isNavBarOpen }) {
  return (
    <button className='btn-mode'>
      <MoonIcon size={26} color='#fff' />
    </button>
  )
}
