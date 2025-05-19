import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function Faq() {
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
  ] as const;

  return (
    <section className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Perguntas frequentes</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          Encontre respostas para perguntas comuns sobre nossos cursos, preços e
          experiência de aprendizado.
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
  );
}