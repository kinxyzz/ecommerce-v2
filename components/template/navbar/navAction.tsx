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
import { LogIn } from "lucide-react";
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
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-fit">
            <ul className="flex justify-center flex-col gap-4 pt-4 px-2">
              <li className="border-b">
                <Link href="#">Profile</Link>
              </li>
              <li className="border-b">
                <p>Setting</p>
              </li>
              <li className="border-b">
                <Button onClick={() => handleSignout()}>Logout</Button>
              </li>
            </ul>
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
