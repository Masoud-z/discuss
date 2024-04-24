"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
