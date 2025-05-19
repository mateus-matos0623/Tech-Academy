import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Course } from "@/types/course";

interface ITitleProps {
  course?: Course;
}

export default function Title({ course }: ITitleProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="title">Título</Label>
      <Input id="title" name="title" required defaultValue={course?.title} />
    </div>
  );
}