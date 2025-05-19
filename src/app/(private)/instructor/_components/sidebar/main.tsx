import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

export default function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas" variant="sidebar">
      <SidebarContent>
        <Header />
        <Navigation />
      </SidebarContent>
      <Footer />
    </Sidebar>
  );
}