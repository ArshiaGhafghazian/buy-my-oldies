"use client"

import { useSession } from "next-auth/react";
import Link from "next/link"

const AuthButton = () => {
    const { data: session, status } = useSession()
    console.log(session, status);
    return (
        <>
            {
                session ?
                    <Link href="/dashboard">{session.user?.email}</Link>
                    :
                    <Link href="/signin">ورود</Link>
            }
        </>
    )
}

export default AuthButton