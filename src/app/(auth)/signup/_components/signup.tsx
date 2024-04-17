"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSignUp } from "../_api/singup"
import { FormEvent, useState } from "react"

const SignUp = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const router = useRouter()

  const signUp = useSignUp({
      onSuccess: () => {
          router.push("/signin")
      }
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault()
      signUp.submit({ email, password })

  }

  return (
      <>
          <h1 className="text-3xl mt-3">فرم ثبت نام</h1>
          <form onSubmit={handleSubmit}>
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
                      ثبت  نام

                  </button>
                  <Link className="mr-5" href={"/signin"}>ورود</Link>
              </div>
          </form>
      </>
  )
}

export default SignUp