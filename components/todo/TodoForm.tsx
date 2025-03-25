"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

type TodoFormProps = {
  onSubmit: (title: string) => void;
  initialValue?: string;
  isEditing?: boolean;
};

export const TodoForm = ({
  onSubmit,
  initialValue = "",
  isEditing = false,
}: TodoFormProps) => {
  const [title, setTitle] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <Input
        type="text"
        placeholder="Add a new todo"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        className="flex-1"
      />
      <Button type="submit" disabled={!title.trim()}>
        {isEditing ? "Update" : <Plus className="h-4 w-4" />}
      </Button>
    </form>
  );
};
