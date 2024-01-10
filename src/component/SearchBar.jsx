/* eslint-disable react/prop-types */

import { FaSearch } from "react-icons/fa"


/**
 * function DogPhoto({ breed }) {

  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {

    variables: { breed },

  });
 */

const SearchBar = ({setName}) => {

    return (
        <div>
            <FaSearch />
            <input type="text" placeholder="type to search..."
                onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default SearchBar