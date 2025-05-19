"use client";

import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handleCreateCourse, handleUpdateCourse } from "@/actions/course";
import { Course } from "@/types/course";
import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";
import { Input } from "../ui/input";
import Title from "./form-fields/title";
import Description from "./form-fields/description";
import Price from "./form-fields/price";
import Level from "./form-fields/level";
import Duration from "./form-fields/duration";
import CourseImage from "./form-fields/image";
import Category from "./form-fields/category";

interface ICourseFormProps {
  course?: Course;
}

export default function CourseForm({ course }: ICourseFormProps) {
  const isEditMode = course ? true : false;

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      return isEditMode
        ? await handleUpdateCourse(formData)
        : await handleCreateCourse(formData);
    },
    onSuccess: (result) => {
      toast.success(result.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  async function handleSubmitCourse(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate(formData);
  }

  const titleMessage = isEditMode ? "Editar curso" : "Criar curso";

  return (
    <div className="w-full max-w-5xl mx-auto md:px-8 mb-6 p-6">
      <h1 className="text-2xl font-bold mb-4">{titleMessage}</h1>

      <form className="space-y-4" onSubmit={handleSubmitCourse}>
        {isEditMode && <Input hidden name='id' value={course?.id} />}
        <Title course={course} />

        <Description course={course} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Price course={course} />
          <Level course={course} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Duration course={course} />
          <Category course={course} />
        </div>

        <CourseImage course={course} />

        <Button type="submit" disabled={mutation.isPending} className="w-full">
          {mutation.isPending ? (
            <Loader2Icon className="animate-spin" />
          ) : (
            "Salvar"
          )}
        </Button>
      </form>
    </div>
  );
}