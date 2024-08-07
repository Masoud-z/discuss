"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
