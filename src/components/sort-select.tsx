"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const frameworks = [
  {
    value: "trending",
    label: "Aktuálně populární",
  },
  {
    value: "new",
    label: "Nejnovější",
  },
  {
    value: "most-wanted",
    label: "Nejvíce žádané",
  },
];

export function SortPicker() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("trending");

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Zvolte řazení.." />
      </SelectTrigger>
      <SelectContent>
        {frameworks.map((framework) => {
          return (
            <SelectItem key={framework.value} value={framework.value}>
              {framework.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
