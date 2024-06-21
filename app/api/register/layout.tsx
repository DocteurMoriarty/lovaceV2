import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import clsx from "clsx";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Lovace",
  description: "Le site pour trouver une relation a coup sûr !!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Toaster />
          <Suspense fallback="Loading..."></Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
