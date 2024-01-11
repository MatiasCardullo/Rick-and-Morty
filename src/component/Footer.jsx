const Footer = ({ countPages, page, setPage }) => {
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
        <footer
            className="flex flex-col items-center text-center text-white bg-neutral-600">
            <div className="container pt-9">
                <div className="mb-9 flex justify-center">
                    {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
                    {countPages > page && <button onClick={() => setPage(page + 1)}>Next</button>}
                </div>
            </div>

            <div
                className="w-full bg-neutral-300 p-4 text-center dark:bg-neutral-700 text-neutral-200">
                © 2023 Copyright:
                <a
                    className="text-neutral-800 dark:text-neutral-400"
                    href="https://tw-elements.com/"
                >TW elements</a
                >
            </div>
        </footer>
    )
}

export default Footer
