import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'A senha precisa conter no mínimo 6 caracteres').max(12, 'A senha pode ter no máximo 12 caracteres')
})

export type LoginFormData = z.infer<typeof loginSchema>