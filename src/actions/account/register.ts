'use server'

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { registerSchema } from "@/schemas/account/register"

export async function handleRegister(formData: FormData) {
    const { name, email, password } = Object.fromEntries(formData.entries());

    const { success, error: invalid } = registerSchema.safeParse({ name, email, password })
    if (!success) {
        return { status: false, message: invalid.errors[0].message };
    }

    const supabase = await createClient();

    const { error, data } = await supabase.auth.signUp({
        email: email.toString(),
        password: password.toString(),
        options: {
            data: {
                name: name.toString()
            },
            emailRedirectTo: 'http://localhost:3000/account'
        }
    });
    console.log('DATA', data)

    if (error) {
        console.log('ERROR', error.message)
        return { status: false, message: 'Credenciais inválidas' };
    }

    redirect('/dashboard')
}