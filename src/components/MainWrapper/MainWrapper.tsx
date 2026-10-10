"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface MainWrapperProps {
  children: React.ReactNode;
}

export const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      style={{
        paddingTop: isHome ? "0" : "88px",
        minHeight: "100vh",
      }}
    >
      {children}
    </main>
  );
};
