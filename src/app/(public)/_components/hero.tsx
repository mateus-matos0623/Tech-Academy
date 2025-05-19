import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="relative text-center space-y-6 py-3 px-4">
        <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-4xl">
          Domine o futuro da tecnologia
        </h1>
        <p className="mx-auto max-w-[700px] text-base md:text-xl text-muted-foreground">
          Junte-se a mais de 50.000 alunos dominando habilidades tecnológicas de
          ponta com cursos líderes do setor e instrutores especialistas.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href={"/courses"}>
            <Button size="lg" className="text-base cursor-pointer">
              Explorar cursos
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="text-base cursor-pointer"
          >
            Ver programas
          </Button>
        </div>
      </div>
    </section>
  );
}