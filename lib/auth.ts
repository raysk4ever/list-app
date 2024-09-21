import { cookies } from "next/headers";

type Session = {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
};

export async function getServerSession(): Promise<Session> {
  const cookieStore = cookies();
  const token = cookieStore.get("auth-token");

  if (!token) {
    return { user: null };
  }

  // Here, you would typically validate the token
  // This could involve decoding a JWT, checking against a database, etc.
  // For this example, we'll just mock a successful authentication

  // Mock user data
  const user = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
  };

  return { user };
}
