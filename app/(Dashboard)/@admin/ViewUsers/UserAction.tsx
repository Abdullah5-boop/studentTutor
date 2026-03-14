"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";

export default function UserAction({ id,userData }: { id: string, userData:boolean }) {
  const [theme, setTheme] = useState("");
console.log("user data from all user page ---> ", userData);
  const handleSubmit = async () => {
      
    let status =
      theme == "Qualified" ? true : theme == "Restricted" ? false : false;
    console.log("Selected theme:", status, " id :", id);

    let result = await fetch("http://localhost:5000/v1/userStatus", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id: id,
        status: status,
      }),
    });
    if (result.ok) {
      toast("Data saved successfully!", {
        duration: 5000, // 5 seconds
      });
    } else {
      toast("Data is not saved successfully!", {
        duration: 10000, // 5 seconds
      });
    }
    console.log(result);
  };

  return (
    <div className="flex gap-5">
      <Toaster />
      <Select onValueChange={(value) => setTheme(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={userData?"Qualified":"Restricted"} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {/* <SelectItem value="light">Ban</SelectItem> */}
            <SelectItem value="Qualified">Qualified</SelectItem>
            <SelectItem value="Restricted">Restricted</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button variant="outline" onClick={handleSubmit}>
        submit
      </Button>
    </div>
  );
}
