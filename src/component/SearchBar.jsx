/* eslint-disable react/prop-types */

import { FaSearch } from "react-icons/fa"


/**
 * function DogPhoto({ breed }) {

  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {

    variables: { breed },

  });
 */

const SearchBar = ({setPage, setName }) => {
    const handleName = (e) => {
        setName(e.target.value)
        setPage(1)
    }

    return (
        <div>
            <FaSearch />
            <input type="text" placeholder="type to search..."
                id='searchBar' onChange={(e) => handleName(e)} />
        </div>
    )
}

export default SearchBar