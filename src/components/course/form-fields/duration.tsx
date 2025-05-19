"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Course } from "@/types/course";

interface IDurationProps {
  course?: Course;
}

export default function Duration({ course }: IDurationProps) {
  const [amount, setAmount] = useState(() => {
    const match = course?.duration?.match(/^(\d+)\s(\w+)/);
    return match ? match[1] : "";
  });

  const [unit, setUnit] = useState(() => {
    const match = course?.duration?.match(/^(\d+)\s(\w+)/);
    return match ? match[2] : "horas";
  });
  console.log('unit:', unit)

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="duration-amount">Duração</Label>
      <div className="flex gap-2">
        <Input
          id="duration-amount"
          type="number"
          min={1}
          required
          placeholder="Ex: 8"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Select value={unit} required onValueChange={setUnit}>
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="horas">Horas</SelectItem>
            <SelectItem value="dias">Dias</SelectItem>
            <SelectItem value="semanas">Semanas</SelectItem>
            <SelectItem value="meses">Meses</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <input type="hidden" name="duration" value={`${amount} ${unit}`} />
    </div>
  );
}
