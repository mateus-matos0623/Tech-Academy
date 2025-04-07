'use client'

import { loginAction } from "@/actions/account/login";
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
import { useActionState } from "react";

export function LoginForm() {

    const initialState = {
        message: '',
        email: '',
        password: ''
    }

    const [state, action, isLoading] = useActionState(loginAction, initialState)

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Bem vindo de volta</CardTitle>
                <CardDescription>Conecte-se a sua conta</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6" action={action}>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium w-10" htmlFor="email">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Digite seu email"
                            name="email"
                            defaultValue={state.email?.toString()}
                        />
                        {state.errors?.email && (
                            <p className="text-sm font-medium text-red-500">{state.errors.email}</p>
                        )}
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
                            defaultValue={state.password?.toString()}
                        />
                        {state.errors?.password && (
                            <p className="text-sm font-medium text-red-500">{state.errors.password}</p>
                        )}
                    </div>
                    <Button
                        className="w-full cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
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