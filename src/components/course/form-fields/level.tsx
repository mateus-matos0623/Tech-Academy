import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Course } from "@/types/course";

interface ILevlProps {
  course?: Course;
}

export default function Level({ course }: ILevlProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="level">Nível</Label>
      <Select name="level" required defaultValue={course?.level}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecionar nível" />
        </SelectTrigger>
        <SelectContent className="w-full">
          <SelectItem value="Iniciante">Iniciante</SelectItem>
          <SelectItem value="Intermediário">Intermediário</SelectItem>
          <SelectItem value="Avançado">Avançado</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}