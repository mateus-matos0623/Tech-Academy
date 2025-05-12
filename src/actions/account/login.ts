'use server'

import { redirect } from "next/navigation";
import { loginSchema } from "@/schemas/account/login"
import { createClient } from "@/utils/supabase/server"

export async function handleLogin(formData: FormData) {
    const { email, password } = Object.fromEntries(formData.entries());

    const { success, error: invalid } = loginSchema.safeParse({ email, password })
    if (!success) {
        console.log('ERROR', invalid.errors[0].message)
        return { success: false, message: invalid.errors[0].message };
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({
        email: email.toString(),
        password: password.toString(),
    });

    if (error) {
        return { success: true, message: 'Credenciais inválidas' };
    }

    redirect('/dashboard')

}