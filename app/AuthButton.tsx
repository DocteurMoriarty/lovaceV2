"use client"

import { signIn, signOut } from "next-auth/react"

export const LoginButton = () => {
    return (
        <button className="whitespace-nowrap inline-flex rounded bg-slate-700 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" 
        onClick={() => signIn()}>
            <p className="mr-2">Connectez-vous avec Github</p> <img src="assets/fluidicongithub.png" width={"20px"}/>  
        </button>
        
    )
}

export const LogoutButton = () => {
    return (
        <button className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" 
        onClick={() => signOut()}>
            Logout
        </button>
    )
}