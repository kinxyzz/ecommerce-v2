"use client";

import { Button } from "@/components/ui/button";
import { useTokenStore } from "@/store/authenticated/store";

import { LogoutUser } from "@/app/hook/useUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogIn, LogOut, Package, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavCart from "./navCart";

export default function NavbarAction() {
  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  const { logout } = LogoutUser();
  const router = useRouter();
  function handleSignout() {
    if (token) {
      logout(undefined, {
        onSuccess() {
          setToken(null);
          window.location.reload();
        },
      });
    }
  }
  function handleLogin() {
    router.push("/login");
  }
  return (
    <div className="flex w-1/3 justify-end gap-2 items-center">
      <NavCart />
      {token ? (
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="/sripadilogo.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-fit">
            <h4 className="scroll-m-20 mb-1 text-base font-semibold tracking-tight">
              My Account
            </h4>
            <ul className="flex justify-center border-y flex-col gap-2 py-2">
              <li className="flex gap-1 text-sm items-center">
                <User size={20} />
                <Link href="/profile">Profile</Link>
              </li>
              <li className="flex gap-1 text-sm items-center">
                <Package size={20} />
                <p>orders</p>
              </li>
            </ul>
            <Button
              className="text-sm mt-4"
              size="sm"
              onClick={() => handleSignout()}
            >
              <LogOut size={20} className="mr-1" />
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button
          onClick={() => handleLogin()}
          variant="outline"
          size="icon"
          className="rouned-md"
        >
          <LogIn size={20} />
        </Button>
      )}
    </div>
  );
}
