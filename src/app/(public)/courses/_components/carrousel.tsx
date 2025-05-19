import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardInfo from "./card";

export default function CarrouselInfo() {
  const courses = [
    {
      title: "Desenvolvimento web",
      description: "Aprenda HTML, CSS, e JavaScript do zero",
      image: "/courses/bg-web2.jpg",
      level: "Iniciante",
      duration: "4 semanas",
    },
    {
      title: "Redes neurais",
      description: "Aprenda como funciona o algoritmo de uma IA",
      image: "/courses/bg-ia.jpg",
      level: "Intermediário",
      duration: "10 semanas",
    },
    {
      title: "Next.js 15+",
      description: "Aprenda a utilizar um dos frameworks mais populares",
      image: "/courses/bg-nextjs.jpeg",
      level: "Iniciante",
      duration: "8 semanas",
    },
  ] as const;

  return (
    <>
      <Carousel
        className="mx-auto"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {courses.map((course, index) => (
            <CarouselItem key={index} className="basis-72 md:basis-96">
              <CardInfo course={course} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}