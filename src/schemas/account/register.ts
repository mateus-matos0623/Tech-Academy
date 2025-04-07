import { z } from "zod";


export const registerSchema = z.object({
    name: z.string().min(2, 'O nome precisa ter no mínimo 2 caracteres'),
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'A senha precisa conter no mínimo 6 caracteres').max(12, 'A senha pode ter no máximo 12 caracteres')
})