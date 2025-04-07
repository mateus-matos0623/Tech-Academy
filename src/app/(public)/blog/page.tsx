import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: "O futuro do desenvolvimento web",
            description:
                "Explore as últimas tendências e tecnologias que moldam o cenário de desenvolvimento web.",
            date: "Março 20, 2025",
            image:
                "/bg-future.jpg",
        },
        {
            id: 2,
            title: "Introdução ao TypeScript",
            description:
                "Um guia para iniciantes sobre como usar TypeScript em seus projetos.",
            date: "Março 16, 2025",
            image:
                "/bg-typescript.jpg",
        },
        {
            id: 3,
            title: "Construa layouts responsivos",
            description:
                "Aprenda as melhores práticas para criar designs web responsivos.",
            date: "Março 25, 2025",
            image:
                "/bg-responsive.jpg",
        },
    ];

    return (
        <div className="space-y-4 mt-20 p-6">
            <h2 className="text-2xl font-semibold tracking-tight md:ml-2 ml-4">Últimos artigos</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:p-0 p-3">
                {posts.map((post) => (
                    <Card
                        className="overflow-hidden border-1 hover:border-gray-300"
                        key={post.id}
                    >
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={450}
                            height={200}
                            className="-mt-6 h-48 object-cover"
                            loading="lazy"
                        />
                        <CardHeader>
                            <CardTitle className="md:text-base text-lg">{post.title}</CardTitle>
                            <CardDescription className="md:text-base text-sm">{post.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center text-sm text-muted-foreground">
                                <span>{post.date}</span>
                                <Button className="cursor-pointer">Ler mais</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}