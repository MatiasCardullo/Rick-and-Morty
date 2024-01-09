//import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Character from './Character'

const Characters = () => {
  
    const charactersQuery = gql`
        {
            characters {
                results {
                    id
                    name
                    type
                    gender
                    species
                    origin {
                      id
                    }
                    location {
                      id
                    }
                    image
                }
            }   
        }
    `
    const { loading, error, data } = useQuery(charactersQuery)

    return (
    <section className='grid-character'>
        { loading && (<p>Cargando...</p>) }
        { error && (<p>Error: {error.message}</p>) }
        { data &&
            data.characters.results.map(ch => (
                <Character key={ch.id} character={ch} />
            ))
            
        }
    </section>
  )
}
export default Characters