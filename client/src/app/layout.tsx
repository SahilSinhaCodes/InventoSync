import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// This is the best practice
import DashboardWrapper from './DashboardWrapper';
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InventoSync",
  description: "Inventory Management System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <DashboardWrapper>  {children} </DashboardWrapper>
      </body>
    </html>
  );
}