import CourseForm from "@/components/course/form";
import { getCourseById } from "@/repositories/course";

interface IEditCourse {
  params: Promise<{ id: string }>;
}

export default async function InstructorEditCourse({
  params,
}: IEditCourse) {
  const { id } = await params;
  const course = await getCourseById(id);
  if (!course) {
    console.log("nenhum curso encontrado");
    return;
  }
  return <CourseForm course={course} />;
}