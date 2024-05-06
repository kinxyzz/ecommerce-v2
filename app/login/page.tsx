"use client";
import LoginForm from "@/components/template/LoginForm";
import { useSession } from "next-auth/react";

export default function page() {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center flex-col gap-4 justify-center h-screen">
      <p>{session?.user?.name}</p>
      <LoginForm />
    </div>
  );
}
