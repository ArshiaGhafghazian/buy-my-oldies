import UserModel from "@/models/User"
import { hashPassword } from "@/utils/auth"
import connectDB from "@/utils/connectDB"

export async function POST(req: Request) {
    try {
        await connectDB()

        const { email, password } = (await req.json()) as {
            email: string
            password: string
        }

        if (!email || !password) {
            return Response.json(
                {
                    type: "",
                    title: "",
                    status: 400,
                    details: "لطفا اطلاعات معتبر وارد کنید",
                },
                { status: 400 }
            )
        }

        const existingUser = await UserModel.findOne({ email })

        if (existingUser) {
            return Response.json(
                {
                    type: "",
                    title: "",
                    status: 400,
                    details: "این حساب کاربری وجود دارد",
                },
                { status: 400 }
            )
        }

        const hashedPassword = await hashPassword(password)

        const newUser = await UserModel.create({
            email,
            password: hashedPassword,
        })

        console.log(newUser)

        return Response.json({
            status: 200,
            message: "حساب کاربری ایجاد شد",
        })
    } catch (error) {
        console.log(error)

        return Response.json(
            {
                type: "",
                title: "",
                status: 500,
            },
            { status: 500 }
        )
    }
}
