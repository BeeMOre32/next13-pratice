import Link from "next/link";
import TodoList from "@/component/TodoList";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<Todo[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
};

export default async function Home() {
  const todo = await getTodo();
  return (
    <>
      {/*<Counter />*/}
      <TodoList todos={todo} />
    </>
  );
}
