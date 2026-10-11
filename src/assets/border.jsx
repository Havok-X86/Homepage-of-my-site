import './Border.css'


function Border({ background = '#7869C4' }) {
  const borderSides = ['top', 'left', 'right', 'bottom']

  return (
    <>
      {borderSides.map((side) => (
        <div key={side} id={side} style={{ backgroundColor: background }}>
          test
        </div>
      ))}
    </>
  )
}

export default Border
