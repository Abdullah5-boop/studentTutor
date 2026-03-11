"use client";
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Field, useForm } from "@tanstack/react-form";
import React from "react";

export default function FormCat() {

   const router = useRouter()
  const form = useForm({
    defaultValues: {
      catName: "",
      catdes: "",
    },
    onSubmit: async ({ value }) => {
      console.log("...", value);



      let result = await fetch("http://localhost:5000/v1/Category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      router.refresh()

      const data = await result.json();
if(data) form.reset()
      console.log(data);
    },
   
  });
  return (
    <div>
      <form
        id="cat-form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="catName"
          children={(field) => (
            <Input
              type="text"
              id={field.name}
              value={field.state.value}
              placeholder="category name"
              onChange={(e) => field.handleChange(e.target.value)}
            ></Input>
          )}
        ></form.Field>
        <form.Field
          name="catdes"
          children={(field) => (
            <Input
              type="text"
              id={field.name}
              placeholder="category description... "
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
            ></Input>
          )}
        ></form.Field>
        <Button type="submit" form="cat-form">
          Add category
        </Button>
      </form>
    </div>
  );
}
