import { createClient } from "@/utils/supabase/server";

export async function adquireCourse(courseId: string) {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return { success: false, message: "Usuário não autenticado" };
  }

  const { error } = await supabase
    .from("enrollments")
    .insert({ student_id: user.id, course_id: courseId });

  console.log('error:', error)
  if (error) {
    return { success: false, message: "Erro ao adquirir curso" };
  }

  return { success: true, message: "Curso adquirido com sucesso" };
}

export async function acquiredCourses() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return { success: false, message: 'Usuário não autenticado', data: [] };
  }

  const { data: enrollments, error: fetchError } = await supabase
    .from("enrollments")
    .select(`
      course_id (
        id,
        title,
        description,
        price,
        level,
        duration,
        category,
        image,
        instructor_id,
        created_at
      )
    `)
    .eq("student_id", user.id);

  if (fetchError) {
    return { success: false, message: 'Erro ao buscar cursos', data: [] };
  }

  const acquiredCourses = enrollments?.map(e => e.course_id) || [];

  return { success: true, message: 'Cursos buscados', data: acquiredCourses }
}

export async function availableCourses() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return { success: false, message: 'Usuário não autenticado', data: [] };
  }

  // 1. Buscar todos os cursos
  const { data: allCourses, error: coursesError } = await supabase
    .from("courses")
    .select("*");

  if (coursesError) {
    return { success: false, message: 'Erro ao buscar cursos', data: [] };
  }

  // 2. Buscar os cursos adquiridos pelo usuário
  const { data: enrollments, error: enrollmentError } = await supabase
    .from("enrollments")
    .select("course_id")
    .eq("student_id", user.id);

  if (enrollmentError) {
    return { success: false, message: 'Erro ao buscar aquisições', data: [] };
  }

  const acquiredIds = enrollments?.map((e) => e.course_id) ?? [];

  // 3. Filtrar os cursos ainda não adquiridos
  const availableCourses = allCourses.filter(course => !acquiredIds.includes(course.id));

  return {
    success: true,
    message: 'Cursos disponíveis encontrados',
    data: availableCourses,
  };
}

export async function removeCourseEnrollment(courseId: string) {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { success: false, message: "Usuário não autenticado" };
  }

  const { error } = await supabase
    .from("enrollments")
    .delete()
    .eq("student_id", user.id)
    .eq("course_id", courseId);

  if (error) {
    return { success: false, message: "Erro ao remover curso" };
  }

  return { success: true, message: "Curso removido com sucesso" };
}
