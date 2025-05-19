import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import "../../globals.css";
import { Geist } from "next/font/google";
import AppSidebar from "./_components/sidebar/main";
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/app/react-query-provider";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  subsets: ["latin"],
});

export default function InstructorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className} antialiased`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <SidebarTrigger className="cursor-pointer" />
              <main>
                <ReactQueryProvider>{children}</ReactQueryProvider>
              </main>
            </SidebarInset>
          </SidebarProvider>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}