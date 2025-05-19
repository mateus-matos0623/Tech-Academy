import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function FeaturedPrograms() {
  const featuredPrograms = [
    {
      title: "Desenvolvimento Web",
      duration: "4 meses",
      level: "Iniciante ao avançado",
      image: "/featured-programs/bg-css.jpg",
      description: "Seja um desenvolvedor full-stack",
    },
    {
      title: "Ciência de dados",
      duration: "4 semanas",
      level: "Intermediário",
      image: "/featured-programs/bg-python.jpg",
      description: "Domine analise de dados com python",
    },
    {
      title: "Computação em nuvem",
      duration: "4 meses",
      level: "Avançado",
      image: "/featured-programs/bg-nasa.jpg",
      description: "Arquitetura em nuvem e práticas Devops",
    },
  ] as const;

  return (
    <section className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">
          Caminhos de aprendizagem em destaque
        </h2>
        <p className="text-muted-foreground mx-auto">
          Programas estruturados projetados para levá-lo do nível iniciante ao
          profissional.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {featuredPrograms.map((program, index) => (
          <Card
            key={index}
            className="overflow-hidden border-1 hover:border-gray-300 dark:bg-zinc-900 shadow-lg"
          >
            <Image
              src={program.image}
              alt={program.title}
              width={417}
              height={30}
              className="-mt-6 h-48 object-cover hover:scale-110 ease-in duration-150"
            />
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{program.duration}</span>
                <span>{program.level}</span>
              </div>
              <Button className="w-full cursor-pointer">Saiba mais</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}