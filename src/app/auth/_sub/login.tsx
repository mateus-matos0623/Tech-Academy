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

export function LoginForm() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function handleSubmitLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('email:', email)
        console.log('password:', password)
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Bem vindo de volta</CardTitle>
                <CardDescription>Conecte-se a sua conta</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6" onSubmit={handleSubmitLogin}>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium w-10" htmlFor="email">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Digite seu email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium w-16" htmlFor="password">
                            Senha
                        </label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Digite sua senha"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button
                        className="w-full cursor-pointer disabled:opacity-40"
                        type="submit"
                    >
                        Entrar
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}