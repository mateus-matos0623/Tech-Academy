import { Suspense } from "react";
import { cookies } from "next/headers";
import { Course } from "@/types/course";
import { LoaderCircle } from "lucide-react";
import TableCourses from "./_components/table";
import HeaderManageCourses from "./_components/header";

export default async function InstructorCoursesPage() {
  const cookieHeader = (await cookies()).toString();
  const response = await fetch("http://localhost:3000/api/courses", {
    method: "GET",
    cache: "force-cache",
    next: { tags: ["get-courses"] },
    headers: {
      Cookie: cookieHeader
    },
  });
  const courses = (await response.json()) as Course[];

  return (
    <div className="p-6">
      <HeaderManageCourses />
      <Suspense fallback={<LoaderCircle className="animate-spin text-center" size={16} />}>
        <TableCourses courses={courses} />
      </Suspense>
    </div>
  );
}