'use client'

import { registerAction } from "@/actions/account/register";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { FormEvent, useActionState, useState } from "react";

export function RegisterForm() {

    const initialState = {
        message: '',
        name: '',
        email: '',
        password: ''
    }

    const [state, action, isLoading] = useActionState(registerAction, initialState)

    return (
        <Card>
            <CardHeader>
                <CardTitle>Faça seu cadastro na plataforma</CardTitle>
                <CardDescription>Insira suas informações</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6" action={action}>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium w-10" htmlFor="name">
                            Nome
                        </label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Digite seu nome completo"
                            defaultValue={state?.name?.toString()}
                        />
                        {state.error?.name && (
                            <p className="text-sm font-medium text-red-600">{state.error.name}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium w-10" htmlFor="email">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Digite seu email"
                            defaultValue={state?.email?.toString()}
                        />
                        {state.error?.email && (
                            <p className="text-sm font-medium text-red-600">{state.error.email}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium w-16" htmlFor="password">
                            Senha
                        </label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Digite sua senha"
                            defaultValue={state?.password?.toString()}
                        />
                        {state.error?.password && (
                            <p className="text-sm font-medium text-red-600">{state.error.password}</p>
                        )}
                    </div>
                    <Button
                        className="w-full cursor-pointer disabled:disabled:opacity-40"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? <LoaderCircle size={16} className="animate-spin" /> : 'Entrar'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}