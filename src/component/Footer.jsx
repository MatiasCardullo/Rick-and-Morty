const Footer = () => {
    return (
        <footer
            className="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600">
            <div className="container pt-9">
                <div className="mb-9 flex justify-center">
                    <a href="#!" className="mr-9 text-neutral-800 dark:text-neutral-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                    
                </div>
            </div>

            <div
                className="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
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
