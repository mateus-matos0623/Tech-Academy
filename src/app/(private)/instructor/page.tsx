import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getInstructorCourses, mockInstructor } from "@/utils/data-instructor"
import { BookOpen, DollarSign, UsersRound, TrendingUp, ListPlus } from "lucide-react"

export default function InstructorDashboard() {
    const instructorCourses = getInstructorCourses(mockInstructor.id)

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
                    <p className="text-muted-foreground">Bem vindo de volta, {mockInstructor.name}! Aqui está um overview sobre seus cursos.</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <Link href="/dashboard/instructor/create">
                        <Button>
                            <ListPlus className="mr-2 h-4 w-4" />
                            Criar novo curso
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard
                    title="Total de estudantes"
                    value="1.243"
                    icon={<UsersRound className="h-8 w-8 text-blue-600" />}
                />
                <StatCard
                    title="Total de cursos"
                    value={instructorCourses.length.toString()}
                    icon={<BookOpen className="h-8 w-8 text-orange-600" />}
                />
                <StatCard
                    title="Total de vendas"
                    value="R$4.892"
                    icon={<DollarSign className="h-8 w-8 text-green-600" />}
                />
                <StatCard
                    title="Média de avaliações"
                    value="4.7"
                    icon={<TrendingUp className="h-8 w-8 text-indigo-600" />}
                />
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Atividade recente</h2>
                <Card>
                    <CardContent className="p-0">
                        <div className="divide-y">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="p-4 flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                                        <UsersRound className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-medium">New student enrolled</p>
                                        <p className="text-sm text-muted-foreground">Student {item} enrolled in {instructorCourses[0]?.title}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{item} day{item !== 1 ? 's' : ''} ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function StatCard({
    title,
    value,
    icon,
}: {
    title: string
    value: string
    icon: React.ReactNode
    }) {
    
    return (
        <Card className="p-1">
            <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="p-2 rounded-lg bg-muted">
                        {icon}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold">{value}</h3>
                    <p className="text-sm text-muted-foreground">{title}</p>
                </div>
            </CardContent>
        </Card>
    )
}