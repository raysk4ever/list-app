import { PrismaClient } from "@prisma/client";

export let prisma: PrismaClient;

if (typeof window === "undefined") {
  prisma = new PrismaClient();
}
