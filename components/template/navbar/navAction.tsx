"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
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
    <div className="flex gap-2 items-center">
      <Button variant="outline" size="icon" className="rouned-md">
        <ShoppingCart size={20} />
      </Button>
      <div className="hidden lg:block">
        {status === "authenticated" ? (
          <Button onClick={handleSignout}>Logout</Button>
        ) : (
          <Button onClick={handleLogin}>Login</Button>
        )}
      </div>
    </div>
  );
}
