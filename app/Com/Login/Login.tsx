"use client";

import * as React from "react";
import { useForm } from "@tanstack/react-form";

import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

export function BugReportForm() {
  //   const form = useForm({
  //     defaultValues: {
  //       title: "",
  //       description: "",
  //     },
  //     validators: {
  //       onSubmit: formSchema,
  //     },
  //     onSubmit: async ({ value }) => {
  //       toast("You submitted the following values:", {
  //         description: (
  //           <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
  //             <code>{JSON.stringify(value, null, 2)}</code>
  //           </pre>
  //         ),
  //         position: "bottom-right",
  //         classNames: {
  //           content: "flex flex-col gap-2",
  //         },
  //         style: {
  //           "--border-radius": "calc(var(--radius)  + 4px)",
  //         } as React.CSSProperties,
  //       })
  //     },
  //   })

  const form = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted with values:",value);
    },
  });

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Bug Report</CardTitle>
        <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="bug-report-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="Name"
              children={(field)=>{
                return(
                    <Field>
                        <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                        <Input 
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                       onChange={(e)=>field.handleChange(e.target.value)}
                        ></Input>
                    </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="bug-report-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
