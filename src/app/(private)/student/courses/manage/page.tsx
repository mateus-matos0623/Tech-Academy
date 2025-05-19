import { CourseCard } from "@/components/course/card";
import { Course } from "@/types/course";
import { cookies } from "next/headers";

export default async function AcquiredCourses() {
  const cookieHeader = (await cookies()).toString();
  const baseUrl = process.env.BASE_URL;
  const response = await fetch(`${baseUrl}/api/student/acquired`, {
    method: "GET",
    cache: "force-cache",
    next: { tags: ["get-acquired-courses"] },
    headers: {
      Cookie: cookieHeader
    },
  });
  const courses = (await response.json()) as Course[];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Meus cursos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map(course => (
            <CourseCard course={course} key={course.id} isAcquired />
          ))
        ) : (
          <p>Você ainda não adquiriu nenhum curso</p>
        )}
      </div>
    </div>
  )
}