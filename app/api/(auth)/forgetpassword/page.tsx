import React from 'react'

export default function forgetpassword() {
    return (
        <div>

            <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
                <div className="flex items-center gap-4">

                    <p className="font-medium sm:text-lg">New message!</p>
                </div>

                <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci
                    blanditiis voluptates eum. Nam, cum minima?
                </p>

                <div className="mt-6 sm:flex sm:gap-4">
                    <a
                        className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
                        href="#"
                    >
                        Take a Look
                    </a>

                    <a
                        className="mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto"
                        href="#"
                    >
                        Mark as Read
                    </a>
                </div>
            </div>


        </div>
    )
}
