import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Award, Brain, Clock, Code, Monitor, Users } from "lucide-react";
import Link from "next/link";
import { CountUP } from "@/components/count-up";
import Image from "next/image";

export default function HomePage() {

    const stats = [
        { quantity: 50000, sufix: "+", label: "Estudantes ativos" },
        { quantity: 200, sufix: "+", label: "Instrutores experientes" },
        { quantity: 1000, sufix: "+", label: "Horas de cursos" },
        { quantity: 95, sufix: "%", label: "Taxa de sucesso" },
    ];

    const features = [
        {
            icon: Monitor,
            title: "Aulas online ao vivo",
            description:
                "Sessões interativas com feedback e discussões em tempo real.",
        },
        {
            icon: Clock,
            title: "Horário flexível",
            description:
                "Aprenda no seu próprio ritmo com acesso 24 horas por dia, 7 dias por semana aos materiais do curso.",
        },
        {
            icon: Award,
            title: "Certificados da Indústria",
            description:
                "Ganhe certificações reconhecidas após a conclusão do curso.",
        },
        {
            icon: Users,
            title: "Suporte à Comunidade",
            description: "Junte-se a uma comunidade próspera de alunos e mentores.",
        },
        {
            icon: Brain,
            title: "Projetos práticos",
            description:
                "Aplique seu conhecimento por meio de projetos práticos e reais.",
        },
        {
            icon: Code,
            title: "Currículo moderno",
            description:
                "Fique à frente com o conteúdo do curso constantemente atualizado.",
        },
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Full Stack Developer",
            company: "Tech Corp",
            image:
                "/bg-women.jpg",
            content:
                "A Tech Academy transformou minha carreira. A abordagem prática e a orientação especializada me ajudaram a conseguir o emprego dos meus sonhos.",
        },
        {
            name: "Michael Chen",
            role: "UI/UX Designer",
            company: "Design Studio",
            image:
                "/bg-men.jpg",
            content:
                "Os cursos de design aqui são excepcionais. Aprendi mais em 3 meses do que em um ano de autoestudo.",
        },
        {
            name: "Juan Rodriguez",
            role: "Data Scientist",
            company: "AI Solutions",
            image:
                "/bg-men2.jpg",
            content:
                "As trilhas de IA e machine learning são de ponta. Os instrutores são verdadeiros especialistas em suas áreas.",
        },
    ];

    const featuredPrograms = [
        {
            title: "Desenvolvimento Web",
            duration: "4 meses",
            level: "Iniciante ao avançado",
            image:
                "/bg-css.jpg",
            description: "Seja um desenvolvedor full-stack",
        },
        {
            title: "Ciência de dados",
            duration: "4 semanas",
            level: "Intermediário",
            image:
                "/bg-python.jpg",
            description: "Domine analise de dados com python",
        },
        {
            title: "Computação em nuvem",
            duration: "4 meses",
            level: "Avançado",
            image:
                "/bg-nasa.jpg",
            description: "Arquitetura em nuvem e práticas Devops",
        },
    ];

    const faqItems = [
        {
            question: "Como funcionam os cursos on-line da Tech Academy?",
            answer:
                "Nossos cursos combinam aprendizado em ritmo próprio com sessões on-line ao vivo. Você terá acesso a aulas em vídeo, tarefas interativas, projetos do mundo real e sessões de mentoria ao vivo. Todos os materiais do curso estão disponíveis 24 horas por dia, 7 dias por semana, e você pode aprender no seu próprio ritmo, seguindo o cronograma recomendado.",
        },
        {
            question: "Que tipo de apoio os alunos recebem?",
            answer:
                "Os alunos recebem suporte abrangente, incluindo: 1) Acesso direto aos instrutores por meio de sessões ao vivo, 2) Sessões de mentoria individual, 3) Fóruns comunitários ativos, 4) Equipe de suporte técnico, 5) Orientação profissional e assistência na recolocação profissional para programas qualificados.",
        },
        {
            question: "Os certificados são reconhecidos pelos empregadores?",
            answer:
                "Sim, nossos certificados são reconhecidos pela indústria e valorizados pelos empregadores. Fazemos parcerias com empresas de tecnologia líderes para garantir que nosso currículo atenda aos padrões da indústria. Muitos de nossos graduados garantiram posições nas principais empresas do mundo.",
        },
        {
            question: "Quais são as opções de pagamento disponíveis?",
            answer:
                "Oferecemos opções de pagamento flexíveis, incluindo: 1) Pagamento único com desconto, 2) Parcelas mensais, 3) Acordos de participação na renda para programas selecionados, 4) Bolsas de estudo para alunos qualificados. Entre em contato com nossa equipe de admissões para obter informações detalhadas.",
        },
        {
            question:
                "Posso alternar entre diferentes cursos ou caminhos de aprendizagem?",
            answer:
                "Sim, você pode alternar entre cursos dentro do mesmo nível de programa. Também oferecemos pacotes de cursos e caminhos de aprendizagem que permitem que você explore diferentes tecnologias enquanto mantém uma abordagem de aprendizagem estruturada.",
        },
        {
            question: "Qual é o tempo médio de conclusão dos cursos?",
            answer:
                "Os tempos de conclusão do curso variam dependendo do programa e da sua dedicação. A maioria dos cursos é projetada para ser concluída em 8 a 12 semanas com 10 a 15 horas de esforço semanal. No entanto, você tem acesso vitalício aos materiais do curso e pode aprender no seu próprio ritmo.",
        },
        {
            question: "Vocês oferecem assistência para recolocação profissional?",
            answer:
                "Sim, oferecemos serviços de carreira abrangentes, incluindo revisões de currículo, preparação para entrevistas, desenvolvimento de portfólio e assistência para colocação de emprego. Nossa equipe de serviços de carreira trabalha com uma rede de parceiros de contratação para ajudar os graduados a encontrar oportunidades relevantes.",
        },
        {
            question: "O que torna a Tech Academy diferente de outras plataformas?",
            answer:
                "A Tech Academy se destaca pela nossa combinação de: 1) Instrutores especialistas do setor, 2) Aprendizagem baseada em projetos, 3) Sessões de mentoria ao vivo, 4) Serviços de suporte de carreira, 5) Comunidade de aprendizagem ativa e 6) Currículo de ponta atualizado regularmente com as tendências do setor.",
        },
    ];

    return (
        <div className="space-y-16 mx-auto md:p-6 p-3 mt-20">
            {/* Hero Section */}
            <section>
                <div className="relative text-center space-y-6 py-3 px-4">
                    <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-4xl">
                        Domine o futuro da tecnologia
                    </h1>
                    <p className="mx-auto max-w-[700px] text-base md:text-xl text-muted-foreground">
                        Junte-se a mais de 50.000 alunos dominando habilidades tecnológicas
                        de ponta com cursos líderes do setor e instrutores especialistas.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href={'/courses'}>
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

            {/* Stats Section */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <Card
                        key={index}
                        className="text-center border-1 hover:border-gray-300 dark:bg-zinc-900 shadow-lg"
                    >
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-primary">
                                <div>
                                    <CountUP end={stat.quantity} />
                                    <span>{stat.sufix}</span>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </CardContent>
                    </Card>
                ))}
            </section>

            {/* Features Grid */}
            <section className="space-y-10">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">
                        Porque escolher a Tech Academy?
                    </h2>
                    <p className="text-muted-foreground max-w-[600px] mx-auto">
                        Oferecemos uma experiência de aprendizado abrangente com recursos
                        projetados para ajudar você a ter sucesso.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-1 hover:border-gray-300 dark:bg-zinc-900 shadow-lg">
                            <CardHeader>
                                <feature.icon className="h-8 w-8 text-primary mb-2" />
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Featured Programs */}
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

            {/* Testimonials */}
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
                        <Card key={index} className="border-1 hover:border-gray-300 dark:bg-zinc-900 shadow-lg">
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

            {/* FAQ Section */}
            <section className="space-y-10">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Perguntas frequentes</h2>
                    <p className="text-muted-foreground max-w-[600px] mx-auto">
                        Encontre respostas para perguntas comuns sobre nossos cursos, preços
                        e experiência de aprendizado.
                    </p>
                </div>
                <Card className="max-w-[900px] mx-auto dark:bg-zinc-900 shadow-md">
                    <CardContent className="pt-6">
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-base cursor-pointer">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-sm">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}