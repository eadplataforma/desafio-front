import StyledComponentsRegistry from "@/lib/AntdRegistry";
import "@/styles/_globals.scss";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { DataProvider } from "@/context/UsersContext";

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
        <StyledComponentsRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#1bbc9c",
              },
            }}
          >
            <DataProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </DataProvider>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
