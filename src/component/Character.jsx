
/* eslint-disable react/prop-types */
//import React from 'react'

const Character = ({ character }) => {
  
  return (
    <div className="flex">
      <img className="rounded-s-full object-cover h-4/5 w-4/5 border-solid border-2 border-black" src={character.image} alt={character.name} />

      <div className="rounded-e-full bg-slate-100 h-4/5 w-4/5 text-black flex items-center justify-center border-solid border-2 border-black p-1 pr-3">
        <div className="content-center">
          <p className="text-sm">
            {character.status}
          </p>
          <div className="font-bold text-xl">{character.name} </div>
          <p>{character.species} </p>
          <p>{character.gender} </p>
        </div>
      </div>
    </div>
  )
}
export default Character