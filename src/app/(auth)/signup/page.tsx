
import { redirect } from "next/navigation";
import SignUp from "./_components/signup";
import { auth } from "@/app/api/auth/[...nextauth]/route";


const SignUpPage = async () => {
    const session = await auth()

    if (session) redirect("/")
    return (
        <>
            <SignUp />
        </>
    )
}

export default SignUpPage