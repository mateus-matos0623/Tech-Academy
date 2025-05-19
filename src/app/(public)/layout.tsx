import "../globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryProvider from "../react-query-provider";
import Header from "@/components/header/main";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Academy",
  description: "Academia de cursos online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className} antialiased`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}