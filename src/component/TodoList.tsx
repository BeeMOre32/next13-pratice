import React from "react";
import { Todo } from "@/app/page";
import Link from "next/link";

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Link href={`/todo/${todo.id}`} key={todo.id}>
          <li>{todo.title}</li>
        </Link>
      ))}
    </ul>
  );
}
