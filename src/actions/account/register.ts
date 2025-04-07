import { registerSchema } from "@/schemas/account/register"

export async function registerAction(previousState: object, formData: FormData) {
    const fields = Object.fromEntries(formData)

    const { success, error } = registerSchema.safeParse(fields)
    if (!success) {
        return {
            name: fields.name,
            email: fields.email,
            password: fields.password,
            error: error.flatten().fieldErrors
        }
    }

    return { name: fields.name, email: fields.email, password: fields.password }
}