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
import { Button } from "@/components/ui/button";

export default function UserAction({ id }: { id: string }) {
  const [theme, setTheme] = useState("");

  const handleSubmit = () => {
    let status =
      theme == "Qualified" ? true : theme == "Restricted" ? false : false;
    console.log("Selected theme:", status, " id :", id);

    let result = fetch("http://localhost:5000/v1/userStatus", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: "include",
      body: JSON.stringify({
        id: id,
        status: status,
      }),
    });
    console.log(result);
  };

  return (
    <div className="flex gap-5">
      <Select onValueChange={(value) => setTheme(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="status" />
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
