import { CountUP } from "@/components/count-up";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Status() {
  const stats = [
    { quantity: 50000, sufix: "+", label: "Estudantes ativos" },
    { quantity: 200, sufix: "+", label: "Instrutores experientes" },
    { quantity: 1000, sufix: "+", label: "Horas de cursos" },
    { quantity: 95, sufix: "%", label: "Taxa de sucesso" },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="text-center border-1 hover:border-gray-300 dark:bg-zinc-900 shadow-lg"
        >
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">
              <div>
                <CountUP end={stat.quantity} />
                <span>{stat.sufix}</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}