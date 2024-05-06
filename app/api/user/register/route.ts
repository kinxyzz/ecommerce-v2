import { hashPassword } from "@/app/lib/auth";
import prisma from "@/app/utils/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  body.password = await hashPassword(body.password);

  await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: body.password,
    },
  });

  return new Response("User created", { status: 201 });
}
