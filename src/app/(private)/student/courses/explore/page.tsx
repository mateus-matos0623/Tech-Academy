import { CourseCard } from "@/components/course/card";
import { Course } from "@/types/course";
import { cookies } from "next/headers";

export default async function ExploreCourses() {
  const cookieHeader = (await cookies()).toString();
  const baseUrl = process.env.BASE_URL;
  const response = await fetch(`${baseUrl}/api/student/avaliable`, {
    method: "GET",
    cache: "force-cache",
    next: { tags: ["get-courses-avaliable"] },
    headers: {
      Cookie: cookieHeader
    },
  });
  const courses = (await response.json()) as Course[];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Explorar cursos</h1>
      <p className="text-muted-foreground mb-8">Descubra novos cursos para expandir seu conhecimento</p>

      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isAcquired={false}
            />
          ))}
        </div>
      ) : (
        <p>Você já adquiriu os cursos disponíveis, continue aprendendo mais!</p>
      )}

    </div>
  )
}