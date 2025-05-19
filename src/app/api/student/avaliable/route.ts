import { availableCourses } from "@/repositories/student";

export async function GET() {
  const { data } = await availableCourses();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}