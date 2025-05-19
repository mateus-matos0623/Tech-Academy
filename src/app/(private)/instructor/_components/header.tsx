import { Button } from "@/components/ui/button";
import { ListPlus } from "lucide-react";
import Link from "next/link";

export default function InstructorDashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Bem vindo de volta! Aqui está um overview dos seus cursos.
        </p>
      </div>
      <div className="md:mt-0">
        <Link href="/dashboard/instructor/create">
          <Button>
            <ListPlus className="mr-2 h-4 w-4" />
            Criar novo curso
          </Button>
        </Link>
      </div>
    </div>
  );
}