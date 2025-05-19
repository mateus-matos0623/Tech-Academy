"use client";

import { handleRegister } from "@/actions/login";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { FormEvent } from "react";
import { toast } from "sonner";

export default function RegisterForm() {

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      return await handleRegister(formData)
    },
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (result) => {
      toast.success(result.message)
    }
  })

  async function handleSubmitRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    mutation.mutate(formData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Faça seu cadastro na plataforma</CardTitle>
        <CardDescription>Insira suas informações</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmitRegister}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Digite seu nome completo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Digite seu email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </div>
          <Button
            className="w-full cursor-pointer disabled:disabled:opacity-40"
            type="submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? <LoaderCircle className="animate-spin" /> : 'Entrar'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}