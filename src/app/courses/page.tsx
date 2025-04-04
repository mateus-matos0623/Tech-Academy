import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export default function Courses() {

    const courses = [
        {
            title: "Fundamentos desenvolvimento web",
            description: "Aprenda HTML, CSS, e JavaScript do zero",
            image:
                "/bg-web2.jpg",
            level: "Iniciante",
            duration: "4 semanas",
        },
        {
            title: "Redes neurais",
            description: "Aprenda como funciona uma IA",
            image:
                "/bg-ia.jpg",
            level: "Intermediário",
            duration: "10 semanas",
        },
        {
            title: "Next.js 15+",
            description: "Aprenda a utilizar um dos frameworks mais populares",
            image: "/bg-nextjs.jpeg",
            level: "Iniciante",
            duration: "8 semanas",
        },
    ];

    return (
        <div className="space-y-8 mt-20 p-6">
            <h2 className="text-2xl font-semibold tracking-tight md:ml-2 ml-3">
                Cursos em alta &#128293;
            </h2>
            <div>
                <Carousel
                    className="mx-auto"
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {courses.map((course, index) => (
                            <CarouselItem key={index} className="basis-96">
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
                                        <Button className="w-full mt-4 cursor-pointer">
                                            Assistir
                                        </Button>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}