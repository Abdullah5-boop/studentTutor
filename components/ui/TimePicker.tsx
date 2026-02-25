"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface TimePickerProps {
  from: string;
  to: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
}

export default function DatePickerAndTimeRangePicker({
  from,
  to,
  onFromChange,
  onToChange,
}: TimePickerProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="space-y-4">
      {/* Date Picker */}
      <div className="flex flex-col gap-2">
        <Label>Date</Label>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="justify-between"
            >
              {date ? date.toLocaleDateString() : "Pick a date"}
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Time Range */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <Label>From</Label>
          <Input
            type="time"
            value={from}
            onChange={(e) => onFromChange(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>To</Label>
          <Input
            type="time"
            value={to}
            onChange={(e) => onToChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}