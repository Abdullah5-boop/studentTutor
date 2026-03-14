import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { adminService } from "@/service/Admin.service";
import UserAction from "./UserAction";
export default async function Viewrpage() {
  let userData = await adminService.getAllUser();


  return (
    <div className="w-2/3 p-4">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">name</TableHead>
            <TableHead>email</TableHead>
            <TableHead>role</TableHead>

            <TableHead className="text-right">permission</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((data: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{data.name}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.role}</TableCell>
                <TableCell className="">
                  <UserAction id={data.id} userData={data.UserStatus}></UserAction>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
