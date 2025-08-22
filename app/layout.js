import {  M_PLUS_Code_Latin } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/hooks/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Header1 from "@/components/hooks/Header1";
import HeaderClient from "@/components/hooks/Header1";



const latin =M_PLUS_Code_Latin({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor Call",
  description: "Emergency ? Doctor are waiting for your Call.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={latin.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <HeaderClient/>
            {/* header section  */}
            <Header />
            <main className="min-h-screen"> {children}</main>

            {/* footer section */}
            <footer className="bg-muted/50 py-6 ">
              <div className="container mx-auto px-4 text-center text-gray-200">
                {' '}
                <p className="">
                  {' '}
                  Hello, Doctor-call . We are availablel for you.
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
