import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeaderManageCourses() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-medium">Gerenciar cursos</h1>
      </div>
      <Link href="/instructor/courses/create">
        <Button size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          Criar curso
        </Button>
      </Link>
    </div>
  );
}
