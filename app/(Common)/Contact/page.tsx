"use client";

import * as React from "react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"; // your custom checkbox

export default function CheckboxList() {
  // State to track checked items
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  // List of checkbox options
  const options = ["Option 1", "Option 2", "Option 3"];

  // Handle checkbox change
  const handleCheckboxChange = (label: string) => {
    setCheckedItems((prev) => {
      const newState = { ...prev, [label]: !prev[label] };
      console.log("Checked items:", newState); // You can replace this with your action
      return newState;
    });
  };

  return (
    <div className="space-y-2">
      {options.map((label) => (
        <div key={label} className="flex items-center space-x-2">
          <Checkbox
            checked={!!checkedItems[label]}
            onCheckedChange={() => handleCheckboxChange(label)}
          />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}