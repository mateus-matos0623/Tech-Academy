'use server'

import { loginSchema } from "@/schemas/account/login"

export async function loginAction(previousState: object, formData: FormData) {
    const email = formData.get('email')
    const password = formData.get('password')

    const { success, error } = loginSchema.safeParse({ email, password })
    if (!success) {
        return {
            email,
            password,
            errors: error.flatten().fieldErrors,
        };
    }

    return { email, password }

}