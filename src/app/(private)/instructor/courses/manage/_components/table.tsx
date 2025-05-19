"use client";

import { MoreHorizontal, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Course } from "@/types/course";
import Link from "next/link";
import { useState } from "react";
import DeleteCourse from "./delete";

interface ITableCoursesProps {
  courses: Course[];
}

type TableStationDialogState = { type: "delete"; courseId: string } | null;

export default function TableCourses({ courses }: ITableCoursesProps) {
  const [dialog, setDialog] = useState<TableStationDialogState>(null);
  
  if (courses.length === 0) {
    return <p className="text-center font-medium">Nenhum curso cadastrado</p>;
  }

  const closeDialog = () => setDialog(null);

  return (
    <>
      <div className="rounded-md border mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Nível</TableHead>
              <TableHead>Duração</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Criado</TableHead>
              <TableHead className="w-[80px]">Acões</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell>
                  {course.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell>{course.level}</TableCell>
                <TableCell>{course.duration}</TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell>{course.description}</TableCell>
                <TableCell>
                  {new Date(course.created_at).toLocaleString("pt-BR")}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <Link
                        href={{
                          pathname: `/instructor/courses/${course.id}/edit`,
                        }}
                      >
                        <DropdownMenuItem className="cursor-pointer">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Editar</span>
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem
                        className="text-destructive cursor-pointer"
                        onClick={() =>
                          setDialog({ type: "delete", courseId: course.id })
                        }
                      >
                        <Trash className="mr-2 h-4 w-4 text-red-500" />
                        <span>Excluir</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {dialog?.type === "delete" && (
        <DeleteCourse isOpen onClose={closeDialog} id={dialog.courseId} />
      )}
    </>
  );
}