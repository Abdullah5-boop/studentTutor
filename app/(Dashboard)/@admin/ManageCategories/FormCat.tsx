"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import React from "react";

export default function FormCat() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      catName: "",
      catdes: "",
    },
    onSubmit: async ({ value }) => {
      try {
        const result = await fetch("http://localhost:5000/v1/Category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // This allows Better Auth cookies (HttpOnly) to be sent to your backend
          credentials: "include", 
          body: JSON.stringify(value),
        });

        if (result.ok) {
          form.reset();
          router.refresh();
          const data = await result.json();
          console.log("Success:", data);
        } else {
          console.error("Submission failed with status:", result.status);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    },
  });

  return (
    <div className="p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <form.Field
          name="catName"
          children={(field) => (
            <Input
              name={field.name}
              value={field.state.value}
              placeholder="Category Name"
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        />
        <form.Field
          name="catdes"
          children={(field) => (
            <Input
              name={field.name}
              value={field.state.value}
              placeholder="Category Description..."
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        />
        <Button type="submit">
          Add Category
        </Button>
      </form>
    </div>
  );
}
