/* eslint-disable react/prop-types */

import { gql, useQuery } from '@apollo/client'
import Character from './Character'

const Characters = ({gender,status}) => {

    const charactersQuery = gql`
    query getdata($chName:String , $chGender: String, $chStatus: String) {
        characters(filter: { name: $chName,gender: $chGender,status: $chStatus}) {
            results {
                id
                name
                type
                gender
                species
                origin {
                  name
                }
                location {
                  name
                }
                image
                status
            }
        }   
    }
    `

    const { loading, error, data } = useQuery(charactersQuery,{
        variables:{
            "chName":"" , "chGender":gender, "chStatus":status
        }
    })

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