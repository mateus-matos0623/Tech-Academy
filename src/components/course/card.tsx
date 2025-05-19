'use client'

import Image from "next/image";
import { Course } from "@/types/course";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ChevronRight, LoaderCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { useMutation } from "@tanstack/react-query";
import { handleAdquireCourse, handleRemoveCourse } from "@/actions/student";
import { toast } from "sonner";

interface CourseCardProps {
  course: Course;
  isAcquired: boolean
}

export function CourseCard({ course, isAcquired }: CourseCardProps) {

  const mutation = useMutation({
    mutationFn: async (courseId: string) => {
      return isAcquired ? await handleRemoveCourse(courseId) : await handleAdquireCourse(courseId)
    },
    onSuccess: (result) => {
      toast.success(result.message)
    },
    onError: (error) => {
      toast.error(error.message)
      console.log(error.message)
    }
  })

  async function handleClick() {
    mutation.mutate(course.id)
  }

  const formatedPrice = course.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <Card
      className='overflow-hidden transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-lg'
    >
      <div className="relative">
        <Image
          src={course.image}
          alt={course.title}
          width={500}
          height={10}
          unoptimized
          className="-mt-6 h-56 object-cover"
        />
        <div className="absolute top-0 right-2">
          <Badge variant='default'>{course.level}</Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="mt-2">{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{course.category}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <span className="font-bold text-lg">{formatedPrice}</span>
          <Button
            variant={isAcquired ? "destructive" : "default"}
            onClick={handleClick}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <span>{isAcquired ? "Remover" : "Adquirir"}</span>
            )}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}