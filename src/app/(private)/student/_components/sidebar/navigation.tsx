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

export default function StudentNavigation() {
  const items = [
    {
      title: "Meus cursos",
      url: "/student/courses/manage",
      icon: GraduationCap,
    },
    {
      title: "Explorar cursos",
      url: "/student/courses/explore",
      icon: ListPlus,
    },
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