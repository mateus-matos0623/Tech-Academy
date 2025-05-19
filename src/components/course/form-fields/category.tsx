import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Course } from "@/types/course";

interface ICategoryProps {
  course?: Course;
}

export default function Category({ course }: ICategoryProps) {
  const categories = [
    { label: "Programação", id: 1 },
    { label: "Desenvolvimento Web", id: 2 },
    { label: "Ciência de dados", id: 3 },
    { label: "Design", id: 4 },
    { label: "UX/UI", id: 5 },
    { label: "Negócios", id: 6 },
    { label: "Marketing", id: 7 },
    { label: "Desenvolvimento mobile", id: 8 },
    { label: "DevOps", id: 9 },
  ] as const;

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="category">Categoria</Label>
      <Select name="category" required defaultValue={course?.category}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecionar categoria" />
        </SelectTrigger>
        <SelectContent className="w-full">
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.label}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}