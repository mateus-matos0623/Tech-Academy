'use server'

import { adquireCourse, removeCourseEnrollment } from "@/repositories/student";
import { revalidateTag } from "next/cache";

export async function handleAdquireCourse(courseId: string) {
  const response = await adquireCourse(courseId);
  revalidateTag('get-courses-avaliable')
  revalidateTag('get-acquired-courses')
  return response;
}

export async function handleRemoveCourse(courseId: string) {
  const response = await removeCourseEnrollment(courseId);
  revalidateTag('get-courses-avaliable')
  revalidateTag('get-acquired-courses')
  return response;
}