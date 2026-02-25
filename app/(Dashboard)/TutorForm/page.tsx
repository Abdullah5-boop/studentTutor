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
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import DatePickerAndTimeRangePicker from "@/components/ui/TimePicker";

export default function TutorForm() {
  const form = useForm({
    defaultValues: {
      subject: "",
      tags: "",
      from: "",
      to: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted with values:", value);
      alert(JSON.stringify(value, null, 2));
    },
  });

  return (
    <Card className=" w-full mt-10">
      <CardHeader>
        <CardTitle>Create Tutor</CardTitle>
        <CardDescription>
          Please enter tutor details.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="tutor-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              {/* Subject */}
              <form.Field name="subject">
                {(field) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Subject
                    </FieldLabel>
                    <Input
                      id={field.name}
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                    />
                  </Field>
                )}
              </form.Field>

              {/* Tags */}
              <form.Field name="tags">
                {(field) => (
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Tags
                    </FieldLabel>
                    <Input
                      id={field.name}
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value)
                      }
                    />
                  </Field>
                )}
              </form.Field>

              {/* Time Picker */}
              <div className="col-span-2">
                <form.Field name="from">
                  {(fromField) => (
                    <form.Field name="to">
                      {(toField) => (
                        <DatePickerAndTimeRangePicker
                          from={fromField.state.value}
                          to={toField.state.value}
                          onFromChange={fromField.handleChange}
                          onToChange={toField.handleChange}
                        />
                      )}
                    </form.Field>
                  )}
                </form.Field>
              </div>
            </div>
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={() => form.reset()}
        >
          Reset
        </Button>

        <Button type="submit" form="tutor-form">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}