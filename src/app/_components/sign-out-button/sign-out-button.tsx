"use client"
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';



const SignOutButton = () => {
    const { data: session, status } = useSession()
   const router = useRouter()
    return (
        <>
            {
                status === "authenticated" && <p onClick={() => {
                    signOut({
                        redirect:false,
                        callbackUrl:"/"
                    }).then(()=>router.push("/"))
                  

                }}>خارج شوبد</p>
            }
        </>
    )
}

export default SignOutButton