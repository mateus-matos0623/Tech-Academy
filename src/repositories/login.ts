import { createClient } from "@/utils/supabase/server";

export async function login(email: string, password: string) {
  const subase = await createClient()
  const { error } = await subase.auth.signInWithPassword({ email: email, password: password })
  if (error) {
    return { success: false, message: 'Credenciais inválidas' }
  }
  return { success: true, message: 'Login feito com sucesso' }
}

export async function registerStudent(email: string, password: string, name: string) {
  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
      emailRedirectTo: 'https://techacademyhub.vercel.app/login'
    },
  });
  if (error) {
    return { success: false, message: 'Erro ao se cadastrar' }
  }
  return { success: true, message: "Cadastro realizado! Verifique seu e-mail para confirmar sua conta." };
}