const Header = ({ countPages, page, setPage }) => {
    /*const handlePage = (e) => {
        setPage(e.target.value)
    }

    const pages = () => {
        let output = []
        for (let index = 0; index < countPages; index++) {
            <button href="#!" className="mr-9 text-neutral-200" value={index + 1} onClick={handlePage}>(index+1)</button>
        }
        return output
    }*/

    return (
        <header
            className="flex flex-col items-center text-center text-white bg-neutral-600">
            <div className="container pt-1">
                <div className="flex justify-center">
                    {page > 1 && <button className="p-5 m-2 rounded-full border-solid border-2 border-black" onClick={() => setPage(page - 1)}>Previous</button>}
                    {countPages > page && <button className="p-5 m-2 rounded-full border-solid border-2 border-black" onClick={() => setPage(page + 1)}>Next</button>}
                </div>
            </div>
        </header>
    )
}

export default Header
