"use client";

import Image from "next/image";
import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Course } from "@/types/course";

interface ICourseImageProps {
  course?: Course;
}

export default function CourseImage({ course }: ICourseImageProps) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(course?.image);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-2">
        <Label>Capa do curso</Label>
        <Input
          type="url"
          id="image"
          name="image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div className="relative h-52 flex items-center justify-center border rounded-md bg-muted/50">
        {imageUrl ? (
          <Image
            src={imageUrl}
            fill
            alt="Pré-visualização"
            unoptimized
            className="object-cover rounded-md"
          />
        ) : (
          <div className="flex flex-col items-center text-muted-foreground">
            <ImagePlus className="h-8 w-8 mb-1" />
            <span className="text-xs">Preview</span>
          </div>
        )}
      </div>
    </div>
  );
}