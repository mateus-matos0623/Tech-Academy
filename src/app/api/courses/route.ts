import { getCourses } from "@/repositories/course";

export async function GET() {
  const courses = await getCourses();
  return new Response(JSON.stringify(courses), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}