import NextAuth, { AuthOptions, Awaitable, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import UserModel from "@/models/User"
import { verifyPassword } from "@/utils/auth"
import connectDB from "@/utils/connectDB"

type Credentials = {
    email?: string
    password?: string
}

export const authOptions: AuthOptions = {
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            //@ts-ignore
            async authorize(credentials:Credentials){
                const { email, password } = credentials || {}

                try {
                    await connectDB()
                } catch (error) {
                    throw new Error("مشکلی در سرور رخ داده است")
                }

                if (!email || !password)
                    throw new Error("لطفا اطلاعات معتبر وارد کنید")

                const user = await UserModel.findOne({ email })

                if (user) {
                    const isValid = await verifyPassword(
                        password,
                        user.password
                    )

                    if (!isValid)
                        throw new Error("ایمیل یا رمز عبور اشتباه است")

                    return { email }
                } else {
                    return null
                }
            },
        }),
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
