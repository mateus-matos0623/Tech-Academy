'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMutation } from "@tanstack/react-query";
import { handleLogin } from "@/actions/login";
import { FormEvent } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

export default function LoginForm() {

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      return await handleLogin(formData)
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  async function handleSubmitLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    mutation.mutate(formData)
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
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu email"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
          <RadioGroup defaultValue="student" required name="role">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="student" id="student" />
              <Label htmlFor="student">Sou aluno</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="instructor" id="instructor" />
              <Label htmlFor="instructor">Sou instrutor</Label>
            </div>
          </RadioGroup>
          <Button className="w-full" type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? <LoaderCircle className="animate-spin" /> : 'Entrar'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}