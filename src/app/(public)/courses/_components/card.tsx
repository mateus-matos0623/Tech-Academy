import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ICourses {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
}

interface ICardInfoProps {
  course: ICourses;
}

export default function CardInfo({ course }: ICardInfoProps) {
  return (
    <Card className="overflow-hidden border-1 hover:border-gray-300">
      <Image
        src={course.image}
        alt={course.title}
        width={400}
        height={300}
        className="h-48 w-full -mt-6 object-cover hover:scale-110 ease-in duration-150"
        loading="lazy"
      />
      <CardHeader>
        <CardTitle className="text-base">{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{course.level}</span>
          <span>{course.duration}</span>
        </div>
        <Button className="w-full mt-4 cursor-pointer">Assistir</Button>
      </CardContent>
    </Card>
  );
}