import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vandringsblog",
  description: "Vandring runt Stockholm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-4 border-white">
          <Navbar />
          <div className="flex w-full max-w-screen-lg mx-auto pb-10 mt-10 px-3">
            {children}
            <Sidebar />
          </div>
        </div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
