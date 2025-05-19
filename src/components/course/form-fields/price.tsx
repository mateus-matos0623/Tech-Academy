'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Course } from "@/types/course";
import { useState } from "react";

interface IPriceProps {
  course?: Course;
}

export default function Price({ course }: IPriceProps) {
  const [displayValue, setDisplayValue] = useState(() => {
    return course?.price
      ? formatToBRL(course.price)
      : "";
  });

  // Função que formata para BRL
  function formatToBRL(value: number | string) {
    const number = typeof value === "string"
      ? parseFloat(value.replace(/[^\d]/g, "")) / 100
      : value;

    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  // Evento ao digitar
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const numericValue = rawValue.replace(/[^\d]/g, ""); // remove não dígitos

    const floatValue = parseFloat(numericValue) / 100;
    const formatted = floatValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    setDisplayValue(formatted);
  };
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="price">Preço</Label>
      <Input
        id="price"
        name="price"
        type="text"
        inputMode="numeric"
        required
        value={displayValue}
        onChange={handleChange}
      />
    </div>
  );
}