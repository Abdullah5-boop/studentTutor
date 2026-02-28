"use client";

import * as React from "react";
import { useForm } from "@tanstack/react-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function TutorSignupForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted with values:", value);
    },
  });

  return (
    <Card className="w-full sm:max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle className=" text-lg">Sign Up</CardTitle>
        <CardDescription>
          Please enter your details to create an tutor account.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Name */}
            <form.Field
              name="name"
              children={(field) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            />

            {/* Email */}
            <form.Field
              name="email"
              children={(field) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    type="email"
                    id={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            />

            {/* Password */}
            <form.Field
              name="password"
              children={(field) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    type="password"
                    id={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <Link href="/Signup" className="text-start px-7 py-2 font-semibold ">sign Up as user</Link >

      <CardFooter className="flex justify-between">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>
        <Button type="submit" form="signup-form">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
