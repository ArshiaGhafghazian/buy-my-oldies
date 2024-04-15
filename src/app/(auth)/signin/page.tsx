"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"


const SignIn = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const router = useRouter()

    const handleSignin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false
        })
        if(res?.error){
            console.log(res.error);
        }else {
            router.push("/")
        }
    }

    return (
        <>
            <h1 className="text-3xl mt-3">فرم ورود</h1>
            <form onSubmit={handleSignin}>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-red-300 mt-4 rounded p-2 outline-none focus:border-red-600"
                        placeholder="ایمیل" />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-red-300 mt-4 rounded p-2 outline-none focus:border-red-600"
                        placeholder="رمز ورود"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="border bg-red-400 px-4 mt-4 rounded"
                    >
                        ورود

                    </button>
                    <Link className="mr-5" href={"/signup"}>ثبت نام</Link>
                </div>
            </form>
        </>
    )
}

export default SignIn