import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      company: "Tech Corp",
      image: "/testimonials/bg-women.jpg",
      content:
        "A Tech Academy transformou minha carreira. A abordagem prática e a orientação especializada me ajudaram a conseguir o emprego dos meus sonhos.",
    },
    {
      name: "Michael Chen",
      role: "UI/UX Designer",
      company: "Design Studio",
      image: "/testimonials/bg-men.jpg",
      content:
        "Os cursos de design aqui são excepcionais. Aprendi mais em 3 meses do que em um ano de autoestudo.",
    },
    {
      name: "Juan Rodriguez",
      role: "Data Scientist",
      company: "AI Solutions",
      image: "/testimonials/bg-men2.jpg",
      content:
        "As trilhas de IA e machine learning são de ponta. Os instrutores são verdadeiros especialistas em suas áreas.",
    },
  ] as const;

  return (
    <section className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Cases de sucesso</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Leia os relatos de nossos graduados que transformaram suas carreiras
          por meio da Tech Academy.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="border-1 hover:border-gray-300 dark:bg-zinc-900 shadow-lg"
          >
            <CardHeader>
              <div className="flex justify-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={150}
                  height={150}
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>
              <CardTitle className="mt-4 text-center">
                {testimonial.name}
              </CardTitle>
              <CardDescription className="text-center">
                {testimonial.role} at {testimonial.company}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}