import React from "react";
import { Todo } from "@/app/page";
import Link from "next/link";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

const getToDoInfo = async (id: string): Promise<Todo> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await res.json();
};

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const todo = await getToDoInfo(id);

  return {
    title: todo.title,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const todo = await getToDoInfo(params.id as string);
  return (
    <div>
      <Link href={`/`}>Back</Link>
      <h1>{todo.title}</h1>
      <Image
        src="https://picsum.photos/3000/3000"
        alt="random image"
        width={500}
        height={500}
      />
      <p>{todo.completed ? "Completed" : "Not completed"}</p>
    </div>
  );
}
