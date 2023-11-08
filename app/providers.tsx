"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
