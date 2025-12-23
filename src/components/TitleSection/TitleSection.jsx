import './TitleSection.css'
export function TitleSection ({ text }) {
  return (
    <h2 className='titulo'>{text}
      <div className='puntitos'>
        <div className='p p1' />
        <div className='p p2' />
        <div className='p p3' />
        <div className='p p4' />
      </div>
    </h2>
  )
}
