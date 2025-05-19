import { Course } from "@/types/course";
import { createClient } from "@/utils/supabase/server";

export async function getCourses() {
  const supabase = await createClient();
  const { error, data } = await supabase
    .from("courses")
    .select(
      "id, title, description, price, level, category, duration, image, created_at"
    )
    .order("created_at", { ascending: false });
  if (error) {
    return [];
  }
  return data as Course[];
}

export async function getCourseById(id: string) {
  const supabase = await createClient();
  const { error, data } = await supabase
    .from("courses")
    .select(
      "id, title, description, price, level, category, duration, image, created_at"
    )
    .eq("id", id)
    .single();
  if (error) {
    return null;
  }
  return data as Course;
}

export default async function createCourse(course: Course) {
  const supabase = await createClient();
  const { error } = await supabase.from("courses").insert(course);
  if (error) {
    console.log("erro ao inserir curso:", error);
    return { success: false, message: "Erro ao inserir curso" };
  }
  return { success: true, message: "Curso criado com successo" };
}

export async function updateCourse(course: Course) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("courses")
    .update(course)
    .eq("id", course.id);
  if (error) {
    console.log("erro ao atualizar curso:", error);
    return { success: false, message: "Erro ao atualizar curso" };
  }
  return { success: true, message: "Curso atualizado com successo" };
}

export async function deleteCourse(courseId: string, instructorId: string) {
  const supabase = await createClient();
  
  const { data: course, error: fetchError } = await supabase
    .from("courses")
    .select("id, instructor_id")
    .eq("id", courseId)
    .single()

  if (fetchError || !course) {
    return { success: false, message: "Curso não encontrado" }
  }

  if (course.instructor_id !== instructorId) {
    return { success: false, message: "Você não tem permissão para excluir este curso" }
  }

  const { error } = await supabase.from("courses").delete().eq("id", courseId);
  if (error) {
    return { success: false, message: "Erro ao deletar curso" };
  }
  return { success: true, message: "Curso deletado com suceso" };
}