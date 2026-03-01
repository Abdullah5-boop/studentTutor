"use client";

import * as React from "react";
import { useForm } from "@tanstack/react-form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";

import DatePickerAndTimeRangePicker from "@/components/ui/TimePicker";

export default function TutorSchedule() {
  const form = useForm({
    defaultValues: {
      from: "",
      to: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted with values:", value);
      alert(JSON.stringify(value, null, 2));
    },
  });

  return (
    <>
      <div className="grid grid-cols-2 gap-4 ">
        <Card className="w-full ">
          <CardHeader>
            <CardTitle>Select Date & Time</CardTitle>
            <CardDescription>
              Please select your available time range.
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
        <Table className="border rounded-xl">
          <TableCaption>All Bookings.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}