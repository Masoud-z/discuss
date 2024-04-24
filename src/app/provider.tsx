"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
