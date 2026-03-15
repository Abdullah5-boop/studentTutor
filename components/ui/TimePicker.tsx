"use client";

import { useState, useEffect } from "react";
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
  from: string | null;
  to: string | null;
  onFromChange: (value: string) => void; // ISO string
  onToChange: (value: string) => void;   // ISO string
}

export default function DatePickerAndTimeRangePicker({
  from,
  to,
  onFromChange,
  onToChange,
}: TimePickerProps) {
  const [mounted, setMounted] = useState(false); // SSR safe
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [fromTime, setFromTime] = useState<string>(from || "");
  const [toTime, setToTime] = useState<string>(to || "");

  // Set mounted after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Combine date + fromTime → ISO
  useEffect(() => {
    if (date && fromTime) {
      const [h, m] = fromTime.split(":").map(Number);
      const newFrom = new Date(date);
      newFrom.setHours(h, m, 0, 0);
      onFromChange(newFrom.toISOString());
    }
  }, [date, fromTime, onFromChange]);

  // Combine date + toTime → ISO
  useEffect(() => {
    if (date && toTime) {
      const [h, m] = toTime.split(":").map(Number);
      const newTo = new Date(date);
      newTo.setHours(h, m, 0, 0);
      onToChange(newTo.toISOString());
    }
  }, [date, toTime, onToChange]);

  if (!mounted) return null; // avoid SSR hydration mismatch

  return (
    <div className="space-y-4">
      {/* Date Picker */}
      <div className="flex flex-col gap-2">
        <Label>Date</Label>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button type="button" variant="outline" className="justify-between">
              {date ? date.toDateString() : "Pick a date"}
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
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>To</Label>
          <Input
            type="time"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}