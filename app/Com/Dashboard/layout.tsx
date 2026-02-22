// layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "./page"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      {/* Sidebar toggle button */}
      <SidebarTrigger />

      {/* Sidebar */}
      <AppSidebar />

      {/* Main content */}
      <main className="ml-[16rem] md:ml-[16rem] p-4">
        {children}
      </main>
    </SidebarProvider>
  )
}