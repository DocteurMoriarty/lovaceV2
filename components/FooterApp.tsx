import { Footer } from "react-day-picker"

export const FooterApp = () => {
    return (


        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
            <hr />

                <div className="mx-auto max-w-md">

                    <form className="mt-6">
                        <div className="relative max-w-lg">
                            <label className="sr-only" htmlFor="email"> Adresse email </label>

                            <input
                                type="email"
                                className="w-full rounded-lg px-6 py-3 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />

                            <button
                                className="absolute rounded end-1 top-1/2 -translate-y-1/2 bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                            >
                                s'inscrire
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    

                    <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
                        <div>
                            <strong className="font-medium text-gray-900"> Services </strong>

                            <ul className="mt-6 space-y-1">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Marketing </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                                        Graphic Design
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                                        App Development
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                                        Web Development
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <strong className="font-medium text-gray-900"> About </strong>

                            <ul className="mt-6 space-y-1">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> About </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Careers </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> History </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Our Team </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <strong className="font-medium text-gray-900"> Support </strong>

                            <ul className="mt-6 space-y-1">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> FAQs </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Contact </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Live Chat </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-100 pt-8">
                    <p className="text-center text-xs/relaxed text-gray-500">
                        © Company 2022. All rights reserved.
                    </p>
                </div>
            </div>
            
        </footer>

    )
}