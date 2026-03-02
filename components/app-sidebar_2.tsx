
"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Checkbox } from "./ui/checkbox"
export interface DashboardNavList {
  title: string
  url: string
}

interface AppSidebarProps {
  sidebarNavlist: DashboardNavList[]
}

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

 function CheckboxBasic({title}:{title:string}) {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">
          {title}
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}

export function AppSidebarTwo({ sidebarNavlist }: AppSidebarProps) {
  return (
    <Sidebar>
      {/* Optional Header */}
      <SidebarHeader className="px-4 py-2 text-lg font-semibold">
        Dashboard
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarNavlist.map((item) => (
                <SidebarMenuItem key={item.title} className=" border-b border-sidebar-border">
                  <SidebarMenuButton asChild>
                    {/* <Link href={item.url}>fhaaaa{item.title}</Link> */}
                    <CheckboxBasic title={item.title}></CheckboxBasic>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}