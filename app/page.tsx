import { auth } from "@/src/lib/auth";
import Image from "next/image";
import { LoginButton, LogoutButton } from "./AuthButton";
import { PasswordForget, ConnectWithEmail } from "./FormConnect"
import { PasswordInput, EmailInput } from "./Input";
import { FooterApp } from "@/components/FooterApp";
export default async function Home() {
  const session = await auth();
  return (
    <div>
      <main>
        <div>
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">

            <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <EmailInput />
              <PasswordInput />
              <ConnectWithEmail />
              <PasswordForget />
            </form>
          </div>

        </div>
        <div>
          <h1>
            {session?.user ? "Authentificated" + session.user.email : "Not Authentificated"}
          </h1>
          <div>
            {!session?.user ?
              (<LoginButton />) :
              (<LogoutButton />)}
          </div>
        </div>

      </main>
      <footer>
        <FooterApp/>
      </footer>
    </div>
  );
}
