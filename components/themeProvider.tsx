"use client";

import { GetUserToken } from "@/app/hook/useUser";
import { useTokenStore } from "@/store/authenticated/store";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  const { data = {} } = GetUserToken();

  useEffect(() => {
    if (!token) setToken(data?.data?.token);
  }, [data]);
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
