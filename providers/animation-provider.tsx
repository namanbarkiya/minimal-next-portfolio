"use client";

import { ReactNode } from "react";

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
  return <>{children}</>;
};
