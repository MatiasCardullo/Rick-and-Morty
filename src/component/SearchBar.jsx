
import { FaSearch } from "react-icons/fa"


/**
 * function DogPhoto({ breed }) {

  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {

    variables: { breed },

  });
 */

const SearchBar = ({input, setInput}) => {

    return (
        <div>
            <FaSearch />
            <input type="text" value={input}
                placeholder="type to search..."
                onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}

export default SearchBar