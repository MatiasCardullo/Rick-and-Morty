import React from 'react'

const Character = ({ character }) => {
  return (
    <section className='card'>
      <div>
        <img className='card-image' src={character.image} alt={character.name} />
      </div>
      <div style={{ marginTop: '15px', marginLeft: '7px' }}>
        <h3>{character.name}</h3>
        <div style={{ marginTop: '10px' }}>
          <span>{character.status}</span>
        </div>
      </div>
    </section>
  )
}
export default Character