"use client";

import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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
import { authUserService } from "@/service/user.service";

export default function BugReportForm() {
  const route = useRouter();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      UserStatus:true
    
    },
    onSubmit: async ({ value }) => {
      toast.loading("loading...");
      console.log("Form submitted with values:", value);
      const res = await authUserService.authUserCreate(value);
      if (res.ok) {
        toast.success("successfully sign up");
        route.push("\Login")
        
      } else {
        const result = await res.json()
        toast.error(`${result.message as string}`);
      }
    },
  });

  return (
    <Card className="w-full sm:max-w-md m-auto mt-10">
      <CardHeader>
        <CardTitle className=" text-lg">Sign Up</CardTitle>
        <CardDescription>
          Please enter your details to create an account.
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
      <Link href="/TurorSignup" className="text-start px-7 py-2 font-semibold ">
        sign up as tutor
      </Link>

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
