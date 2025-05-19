import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import StudentNavigation from "./navigation";
import Footer from "./footer";
import Header from "./header";

export default function AppSidebar() {
  return (
    <div>
      <Sidebar collapsible="offcanvas" variant="sidebar">
        <SidebarContent>
          <Header />
          <StudentNavigation />
        </SidebarContent>
        <Footer />
      </Sidebar>
    </div>
  );
}