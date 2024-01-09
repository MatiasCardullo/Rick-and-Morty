
/* eslint-disable react/prop-types */
//import React from 'react'

const Character = ({ character }) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <img className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal" src={character.image} alt={character.name} />

      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            {character.status}
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{character.name} </div>
          <p>{character.species} </p>
          <p>{character.gender} </p>
          <p>{character.type} </p>
        </div>
      </div>
    </div>
  )
}
export default Character