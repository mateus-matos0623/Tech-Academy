import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  GraduationCap,
  ListPlus,
} from "lucide-react";
import Link from "next/link";

export default function InstructorNavigation() {
  const items = [
    {
      title: "Gerenciar cursos",
      url: "/instructor/courses/manage",
      icon: GraduationCap,
    },
    {
      title: "Criar curso",
      url: "/instructor/courses/create",
      icon: ListPlus,
    }
  ] as const;
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span className="text-md">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}