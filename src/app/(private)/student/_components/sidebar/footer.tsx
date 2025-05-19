'use client'

import handleLogout from "@/actions/logout";
import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";

export default function Footer() {
  async function logout() {
    await handleLogout()
  }
  return (
    <SidebarFooter>
      <SidebarMenu className="cursor-pointer">
        <SidebarMenuItem className="cursor-pointer">
          <SidebarMenuButton onClick={logout}>
            <LogOut />
            <span className="text-md">Sair</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}