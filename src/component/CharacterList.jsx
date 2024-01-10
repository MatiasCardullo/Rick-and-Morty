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
                    status
                }
            }   
        }
    `
    const { loading, error, data } = useQuery(charactersQuery)

    return (
        <>

            {loading && (<p>Cargando...</p>)}
            {error && (<p>Error: {error.message}</p>)}
            <section className='flex justify-center pt-5'>

                <div className='grid text-center justify-center grid-cols-4 gap-x-5 w-3/4'>
                {data &&
                    data.characters.results.map(ch => (
                        <Character key={ch.id} character={ch} />
                    ))
                }
                </div>
            </section>
        </>
    )
}
export default Characters