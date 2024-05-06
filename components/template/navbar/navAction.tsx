"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NavbarAction() {
  const { data: session, status } = useSession();
  const router = useRouter();
  function handleSignout() {
    signOut();
  }
  function handleLogin() {
    if (!session) {
      router.push("/login");
    }
  }
  return (
    <div>
      {status === "authenticated" ? (
        <Button onClick={handleSignout}>Logout</Button>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
    </div>
  );
}
