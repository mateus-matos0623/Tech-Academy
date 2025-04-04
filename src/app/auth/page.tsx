import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./_sub/login";
import { RegisterForm } from "./_sub/register";

export default function Auth() {
    return (
        <div className="flex justify-center items-center min-h-[80vh] mx-auto h-screen">
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