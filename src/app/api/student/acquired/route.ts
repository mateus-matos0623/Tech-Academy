import { acquiredCourses } from "@/repositories/student";

export async function GET() {
  const { data } = await acquiredCourses();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}