"use client"

export const ConnectWithEmail = () => {
    return (
        <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
        >
            Sign in
        </button>
    )
}

export const PasswordForget = () => {
    return (
        <p className="mt-10 text-center text-sm text-gray-500">
            Vous n'avez pas de compte ?            
            <a href="/api/forgetpassword" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Créer en un ici</a>
        </p>
    )
}