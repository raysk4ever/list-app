import List from "@/components/list";
import { getServerSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/auth");
  }

  return (
    <main className="p-8">
      <List />
    </main>
  );
}
