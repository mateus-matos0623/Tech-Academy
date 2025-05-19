import StatusCard from "./_components/card-status";
import InstructorDashboardHeader from "./_components/header";
import { BookOpen, DollarSign, UsersRound, TrendingUp } from "lucide-react";

export default function InstructorDashboardPage() {
  return (
    <div className="p-6">
      <InstructorDashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <StatusCard
          title="Estudantes"
          value="1.243"
          icon={<UsersRound className="h-8 w-8 text-blue-600" />}
        />
        <StatusCard
          title="Cursos"
          value={"25"}
          icon={<BookOpen className="h-8 w-8 text-orange-600" />}
        />
        <StatusCard
          title="Ganhos"
          value="R$4.892"
          icon={<DollarSign className="h-8 w-8 text-green-600" />}
        />
        <StatusCard
          title="Média de avaliação"
          value="4.7"
          icon={<TrendingUp className="h-8 w-8 text-indigo-600" />}
        />
      </div>
    </div>
  );
}