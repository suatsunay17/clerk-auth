import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clerk Auth Suat",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Header />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
