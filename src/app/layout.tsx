import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/_globals.scss";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EAD Plataforma",
  description: "Bem-vindo à EAD Plataforma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#1bbc9c",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
