/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Character from './Character'
import Modal from "./Modal"

const Characters = ({ setCount, page, name, gender, status, specie }) => {

    const charactersQuery = gql`
    query getdata($chPage: Int ,$chName: String , $chGender: String, $chStatus: String, $chSpecie: String) {
        characters(page: $chPage,filter: { name: $chName,gender: $chGender,status: $chStatus,species: $chSpecie}) {
            info{
                pages
            }
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

    const { loading, error, data } = useQuery(charactersQuery, {
        variables: {
            "chPage": page, "chName": name, "chGender": gender, "chStatus": status, "chSpecie": specie,
        }
    })

    const [ch, setCh] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        ch?setModal(true):setModal(false)
    },ch);

    useEffect(() => {
        data && setCount(data.characters.info.pages)
    });

    return (
        <>
            {ch && <Modal ch={ch} setCh={setCh} />}
            {loading && (<p>Cargando...</p>)}
            {error && (<p>Error: {error.message}</p>)}
            <section className='flex justify-center pt-5'>

                <div className='grid text-center justify-center grid-cols-4 gap-x-5 w-3/4'>
                    {data &&
                        data.characters.results.map(ch => (
                            <Character key={ch.id} character={ch} handleModal={setCh} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}
export default Characters