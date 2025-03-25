"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search todos..."
        className="pl-8"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onSearch(e.target.value)
        }
      />
    </div>
  );
};
