import { Award, Brain, Clock, Code, Monitor, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: Monitor,
      title: "Aulas online ao vivo",
      description:
        "Sessões interativas com feedback e discussões em tempo real.",
    },
    {
      icon: Clock,
      title: "Horário flexível",
      description:
        "Aprenda no seu próprio ritmo com acesso 24 horas por dia, 7 dias por semana aos materiais do curso.",
    },
    {
      icon: Award,
      title: "Certificados da Indústria",
      description:
        "Ganhe certificações reconhecidas após a conclusão do curso.",
    },
    {
      icon: Users,
      title: "Suporte à Comunidade",
      description: "Junte-se a uma comunidade próspera de alunos e mentores.",
    },
    {
      icon: Brain,
      title: "Projetos práticos",
      description:
        "Aplique seu conhecimento por meio de projetos práticos e reais.",
    },
    {
      icon: Code,
      title: "Currículo moderno",
      description:
        "Fique à frente com o conteúdo do curso constantemente atualizado.",
    },
  ] as const;

  return (
    <section className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Porque escolher a Tech Academy?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Oferecemos uma experiência de aprendizado abrangente com recursos
          projetados para ajudar você a ter sucesso.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ description, title, icon: Icon }, index) => (
          <Card
            key={index}
            className="border-1 hover:border-gray-300 dark:bg-zinc-900 shadow-lg"
          >
            <CardHeader>
              <Icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}