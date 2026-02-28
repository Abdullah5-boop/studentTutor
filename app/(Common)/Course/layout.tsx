import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode
}) 



{
  const sidebarNavlist = [
  {
    title: "Admin Dashboard 1",
    url: "#",
  },
  {
    title: "Admin Dashboard 2",
    url: "#",
  }
]  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar sidebarNavlist={sidebarNavlist} />

        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          <main className="p-4">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}