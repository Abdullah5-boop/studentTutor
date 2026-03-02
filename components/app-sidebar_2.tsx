
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

function CheckboxBasic({ title }: { title: string }) {
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
  const [selected, setSelected] = React.useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setSelected((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  console.log(selected)

  const categories = [
    { id: "cat-1", label: "Cat 1" },
    { id: "cat-2", label: "Cat 2" },
    { id: "cat-3", label: "Cat 3" },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-2 text-lg font-semibold">
        Dashboard
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <form>
                <ul>
                  {categories.map((item) => (
                    <li key={item.id}>
                      <input
                        type="checkbox"
                        id={item.id}
                        name={item.id}
                        checked={selected[item.id] || false}
                        onChange={handleChange}
                      />
                      <label htmlFor={item.id}>{item.label}</label>
                    </li>
                  ))}
                </ul>

                <p>
                  Selected:{" "}
                  {Object.keys(selected)
                    .filter((key) => selected[key])
                    .join(", ")}
                </p>
              </form>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}