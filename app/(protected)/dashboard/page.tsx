// import { getServerSession } from "@/lib/auth";
// import { redirect } from "next/navigation";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
    </div>
  );
}
