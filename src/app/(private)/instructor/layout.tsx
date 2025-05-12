import AppSidebarInstructor from "./_components/sidebar/main"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function InstructorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <SidebarProvider>
                <AppSidebarInstructor />
                <SidebarInset>
                    <SidebarTrigger className="cursor-pointer" />
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}