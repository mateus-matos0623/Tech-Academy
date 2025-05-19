import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface IArticles {
  id: number
  title: string;
  description: string;
  image: string;
  date: string
}

interface ICardInfoProps {
  article: IArticles;
}

export default function CardInfo({ article }: ICardInfoProps) {
  return (
    <>
      <Card
        className="overflow-hidden border-1 hover:border-gray-300"
        key={article.id}
      >
        <Image
          src={article.image}
          alt={article.title}
          width={450}
          height={200}
          className="-mt-6 h-48 object-cover hover:scale-110 ease-in duration-150"
          loading="lazy"
        />
        <CardHeader>
          <CardTitle className="md:text-base text-lg">{article.title}</CardTitle>
          <CardDescription className="md:text-base text-sm">
            {article.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{article.date}</span>
            <Button className="cursor-pointer">Ler mais</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}