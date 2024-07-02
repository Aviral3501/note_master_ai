import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dark } from '@clerk/themes';

import { ClerkProvider } from '@clerk/nextjs'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoteMaster AI",
  description: "AI note making app to boost your producitivy by 10X.",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/logo.svg?v=4'],
    shortcut: ['/logo.svg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: [dark]
    }}>
      <html lang='en'>
        <Providers>
          <body>
            {children}
          </body>
        </Providers>
      </html>
    </ClerkProvider>
  );
}
