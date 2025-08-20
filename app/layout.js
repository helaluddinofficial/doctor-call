import {  M_PLUS_Code_Latin } from "next/font/google";
import "./globals.css";



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
    <html lang="en">
      <body className={latin.className}>
        <main className="min-h-screen"> {children}
          <footer>
            <div className="container mx-auto px-4 text-center text-gray-200"> <p className=""> Hello, Doctor-call . We are availablel for you.</p></div>
          </footer>
        </main>
      </body>
    </html>
  );
}
