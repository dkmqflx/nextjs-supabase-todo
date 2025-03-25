"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";
import { EditTodoDialog } from "./EditTodoDialog";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
};

export const TodoItem = ({
  id,
  title,
  completed,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) => {
  return (
    <Card className="w-full">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Checkbox checked={completed} onCheckedChange={() => onToggle(id)} />
          <span
            className={completed ? "line-through text-muted-foreground" : ""}
          >
            {title}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <EditTodoDialog id={id} title={title} onEdit={onEdit} />
          <Button variant="ghost" size="icon" onClick={() => onDelete(id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
