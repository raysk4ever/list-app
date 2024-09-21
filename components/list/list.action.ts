"use server";

import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";

export async function addNewItem(formData: FormData) {
  try {
    await prisma.list.create({
      data: { title: formData.get("title")?.toString() || "Todo" },
    });
    revalidatePath("/");
    return true;
  } catch (error) {
    console.log(error);
    return "Something went wrong";
  }
}
