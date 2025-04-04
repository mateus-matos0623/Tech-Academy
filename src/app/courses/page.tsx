import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Courses() {

    const courses = [
        {
            title: "Fundamentos desenvolvimento web",
            description: "Aprenda HTML, CSS, e JavaScript do zero",
            image:
                "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=600",
            level: "Iniciante",
            duration: "4 semanas",
        },
        {
            title: "Redes neurais",
            description: "Aprenda como funciona uma IA",
            image:
                "https://plus.unsplash.com/premium_photo-1733317429945-a3688f50430b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjb21wdXRlcnxlbnwwfHwyfHx8MA%3D%3D",
            level: "Intermediário",
            duration: "10 semanas",
        },
        {
            title: "Next.js 15+",
            description: "Aprenda a utilizar um dos frameworks mais populares",
            image:
                "https://miro.medium.com/v2/resize:fit:1000/0*dCkBR3Q3lkGMKeAh.png",
            level: "Iniciante",
            duration: "8 semanas",
        },
        {
            title: "Node.js",
            description: "Aprenda a construir APIS eficientes de forma simples",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw_2cNT1EMdE5IZudq2wji72uEPhih5KV4g&s",
            level: "Iniciante",
            duration: "4 semanas",
        },
        {
            title: "Java",
            description: "Aprenda a construir um backend robusto e escalável",
            image:
                "https://blog.geekhunter.com.br/wp-content/uploads/2018/04/java-860x418.png",
            level: "Intermediário",
            duration: "8 semanas",
        },
        {
            title: "Python",
            description: "Aprenda algoritmos e estrutura de dados",
            image: "https://raspberry-valley.azurewebsites.net/img/Python-01.jpg",
            level: "Iniciante",
            duration: "4 semanas",
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
                                    <img
                                        src={course.image}
                                        alt={course.title}
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