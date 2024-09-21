import { prisma } from "@/prisma";
import { AddNewList } from "./new-list";

export default async function List() {
  const lists = await prisma.list.findMany({
    take: 10,
    orderBy: { id: "desc" },
  });

  return (
    <>
      <h1>List</h1>
      <AddNewList />
      {lists.length === 0 && (
        <>
          <p>No List. Create a list now!</p>
        </>
      )}
      {lists.map((list) => (
        <div key={list.id}>
          <span>{list.title}</span>
        </div>
      ))}
    </>
  );
}
