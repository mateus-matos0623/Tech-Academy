'use client'

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";

export function RegisterForm() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function handleRegister(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('name:', name)
        console.log('email:', email)
        console.log('password:', password)
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Faça seu cadastro na plataforma</CardTitle>
                <CardDescription>Insira suas informações</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6" onSubmit={handleRegister}>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium w-10" htmlFor="name">
                            Nome
                        </label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Digite seu nome completo"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium w-10" htmlFor="email">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium w-16" htmlFor="password">
                            Senha
                        </label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button
                        className="w-full cursor-pointer disabled:disabled:opacity-40"
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}