"use client"

import Link from "next/link"

const SignIn = () => {
    return (
        <>
            <h1 className="text-3xl mt-3">فرم ورود</h1>
            <div>
                <input
                    className="border border-red-300 mt-4 rounded p-2 outline-none focus:border-red-600" type="text"
                    placeholder="ایمیل" />
            </div>
            <div>
                <input
                    className="border border-red-300 mt-4 rounded p-2 outline-none focus:border-red-600" type="text"
                    placeholder="رمز ورود" />
            </div>
            <div>
                <button
                    className="border bg-red-400 px-4 mt-4 rounded"
                >
                   ورود

                </button>
                <Link className="mr-5" href={"/signup"}>ثبت نام</Link>
            </div>
        </>
    )
}

export default SignIn