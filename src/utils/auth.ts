import { hash, compare } from "bcryptjs"

export const hashPassword = async (password: string): Promise<string> => {
    const hashedPassword = await hash(password, 12)
    return hashedPassword
}

export const verifyPassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    const isValid = await compare(password, hashedPassword)
    return isValid
}
