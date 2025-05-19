import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardInfo from "./card-info";

export default function CarrouselInfo() {
  const articles = [
    {
      id: 1,
      title: "O futuro do desenvolvimento web",
      description:
        "Explore as últimas tendências e tecnologias que moldam o cenário de desenvolvimento web.",
      date: "Março 20, 2025",
      image: "/blog/bg-future.jpg",
    },
    {
      id: 2,
      title: "Introdução ao TypeScript",
      description:
        "Um guia para iniciantes sobre como usar TypeScript em seus projetos.",
      date: "Março 16, 2025",
      image: "/blog/bg-typescript.jpg",
    },
    {
      id: 3,
      title: "Construa layouts responsivos",
      description:
        "Aprenda as melhores práticas para criar designs web responsivos.",
      date: "Março 25, 2025",
      image: "/blog/bg-responsive.jpg",
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
          {articles.map((article) => (
            <CarouselItem key={article.id} className="basis-72 md:basis-96">
              <CardInfo article={article} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}