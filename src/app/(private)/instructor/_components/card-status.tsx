import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface IStatusCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}

export default function StatusCard({ title, value, icon }: IStatusCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <span className="p-2 rounded-lg bg-muted">{icon}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold">{value}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
}