import LoginForm from "./_components/login";
import RegisterForm from "./_components/register";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Account() {
    return (
        <div className="flex justify-center mt-32">
            <Tabs defaultValue="login" className="md:w-[400px] w-96">
                <TabsList className="grid w-full grid-cols-2 h-10">
                    <TabsTrigger value="login" className="cursor-pointer">
                        Login
                    </TabsTrigger>
                    <TabsTrigger value="register" className="cursor-pointer">
                        Cadastro
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <LoginForm />
                </TabsContent>
                <TabsContent value="register">
                    <RegisterForm />
                </TabsContent>
            </Tabs>
        </div>
    );
}