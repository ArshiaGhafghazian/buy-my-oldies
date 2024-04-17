import { createData } from "@/core/http-servise/http-service"
import { SignUp } from "../_types/singup.types"
import { useMutation } from "@tanstack/react-query"

const signUp = (model: SignUp): Promise<void> =>
    createData<SignUp, void>("/auth/signup", model)

type UseSignUpOptions = {
    onSuccess: () => void
}

export const useSignUp = ({ onSuccess }: UseSignUpOptions) => {
    const { mutate: submit, isPending } = useMutation({
        mutationFn: signUp,
        onSuccess,
    })

    return {
        submit,
        isPending,
    }
}