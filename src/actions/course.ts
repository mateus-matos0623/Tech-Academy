"use server";

import createCourse, { deleteCourse, updateCourse } from "@/repositories/course";
import { Course } from "@/types/course";
import { createClient } from "@/utils/supabase/server";
import { revalidateTag } from "next/cache";

export async function handleCreateCourse(formData: FormData) {
  const course = Object.fromEntries(formData.entries()) as unknown as Course;

  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    return { success: false, message: 'Usuário não autenticado' }
  }

  const response = await createCourse({ ...course, instructor_id: user.id });
  if (!response.success) {
    return { message: response.message, success: false };
  }
  revalidateTag("get-courses");
  return { success: true, message: response.message };
}

export async function handleUpdateCourse(formData: FormData) {
  const course = Object.fromEntries(formData.entries()) as unknown as Course;

  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    return { success: false, message: 'Usuário não autenticado' }
  }

  const response = await updateCourse({ ...course, instructor_id: user.id });
  if (!response.success) {
    return { message: response.message, success: false };
  }
  revalidateTag("get-courses");
  return { success: true, message: response.message };
}

export async function handleDeleteCourse(id: string) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    return { success: false, message: 'Usuário não autenticado' }
  }

  const response = await deleteCourse(id, user.id);
  if (!response.success) {
    return { message: response.message };
  }
  revalidateTag("get-courses");
  return { message: response.message };
}