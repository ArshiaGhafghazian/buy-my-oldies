import credentials from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"
import NextAuth, { NextAuthConfig } from "next-auth"
import connectDB from "./connectDB"
import { verifyPassword } from "./authUtils"
import UserModel from "@/models/User"

type Credentials = {
    email: string
    password: string
}

export const {
    handlers,
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        credentials({
            async authorize(credentials, req) {
                const { email, password } = credentials as Credentials

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
})

