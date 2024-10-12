import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skipathon",
  description: "Helipad for skipping geeks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark"]}
        >
          {/* <SessionWrapper> */}
          {/* <RecoilContextProvider> */}

          <NavBar />
          <div className="container mx-auto">{children}</div>
          {/* </RecoilContextProvider> */}
          {/* </SessionWrapper> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
