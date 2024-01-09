import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Character from './Character'

const Characters = () => {
  
    const charactersQuery = gql`
        {
            characters {
                results {
                    id
                    name
                    image
                    status
                }
            }   
        }
    `
    const { loading, error, data } = useQuery(charactersQuery)
  
    return (
    <section className='grid-character'>
        { loading && (<p>Cargando...</p>) }
        { error && (<p>Error: </p>) }
        { data &&
            data.characters.results.map(character => (
                <Character key={character.id} character={character} />
            ))
            
        }
    </section>
  )
}
export default Characters