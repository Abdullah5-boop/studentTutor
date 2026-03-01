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
import { int } from "zod"

interface dashboardNavList {
  title: string;
  url: string;
  
}
const role={
  role:"Student"
}
const adminNavList:dashboardNavList[] =[
  {
    title: "All Users",
    url: "/Admin/ViewUsers",
  },
  {
    title: "All Bookings",
    url: "/Admin/VIewAllBooking",
  },
  {
    title: "Manage Categories",
    url: "/Admin/ManageCategories",
  }
]  
const tutorNavList :dashboardNavList[] =[
  {
    title: "Tutor Profile",
    url: "/Tutor/TutorProfile"
  },
  {
    title:"Tutor form",
    url: "/Tutor/TutorForm"
  },
  {
    title:"Tutor schedule",
    url:"/Tutor/TutorSchedule"
  }
]  
const studentNavList :dashboardNavList[] =[
  {
    title: "Student Dashboard",
    url: "/Student"
  },
  {
    title: "Student Dashboard 2",
    url: "#"
  }
]  


const sidebarNavlist = role.role === "admin" ? 
adminNavList : role.role === "tutor" ? tutorNavList : role.role === "Student" ? studentNavList:[]

export default function DashboardLayout({ children, admin, tutor, student }: { children: React.ReactNode, admin: React.ReactNode, tutor: React.ReactNode, student: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar sidebarNavlist={sidebarNavlist}  />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
   
      {
        role.role === "admin"? admin : role.role === "tutor"? tutor : student
      }
        
    
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
