'use server'

import { login, registerStudent } from "@/repositories/login"
import { loginSchema } from "@/schemas/login"
import { registerSchema } from "@/schemas/register"
import { Credentials } from "@/types/credentials"
import { Register } from "@/types/register"
import { redirect } from "next/navigation"

export async function handleLogin(formData: FormData) {
  const credentials = Object.fromEntries(formData.entries()) as Credentials
  const parse = loginSchema.safeParse(credentials);

  if (!parse.success) {
    const error = parse.error.issues[0].message
    throw new Error(error)
  }

  const { email, password } = parse.data;

  const response = await login(email, password);

  if (!response.success) {
    throw new Error(response.message);
  }

  if (credentials.role === 'instructor') {
    redirect('/instructor/courses/manage');
  } else {
    redirect('/student/courses/manage');
  }
}

export async function handleRegister(formData: FormData) {
  const credentials = Object.fromEntries(formData.entries()) as Register
  const parse = registerSchema.safeParse(credentials);

  if (!parse.success) {
    const error = parse.error.issues[0].message
    throw new Error(error)
  }

  const { email, password, name } = parse.data;

  const response = await registerStudent(email, password, name)

  if (!response.success) {
    throw new Error(response.message);
  }
  return response
}