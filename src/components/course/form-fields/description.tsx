import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Course } from "@/types/course";

interface IDescriptionProps {
  course?: Course;
}

export default function Description({ course }: IDescriptionProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="description">Descrição</Label>
      <Textarea
        id="description"
        name="description"
        required
        defaultValue={course?.description}
      />
    </div>
  );
}