/* eslint-disable react/prop-types */

import { gql, useQuery } from '@apollo/client'
import Character from './Character'

const Characters = ({page,name,gender,status,specie}) => {

    const charactersQuery = gql`
    query getdata($chPage: Int ,$chName: String , $chGender: String, $chStatus: String, $chSpecie: String) {
        characters(page: $chPage,filter: { name: $chName,gender: $chGender,status: $chStatus,species: $chSpecie}) {
            info{
                pages
            }
            results {
                id
                name
                gender
                image
                status
            }
        }   
    }
    `

    const { loading, error, data } = useQuery(charactersQuery,{
        variables:{
            "chPage":page , "chName":name , "chGender":gender, "chStatus":status,"chSpecie":specie,
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