import ChangeTheme from "@/components/change-theme";
import { SidebarHeader } from "@/components/ui/sidebar";
import { GraduationCap } from "lucide-react";

export default function Header() {
  return (
    <SidebarHeader>
      <div className="flex items-center gap-2">
        <GraduationCap size={18} />
        <p className="text-left text-lg tracking-widest font-medium">
          Tech Academy
        </p>
        <ChangeTheme />
      </div>
    </SidebarHeader>
  );
}