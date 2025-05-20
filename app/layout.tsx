import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import { MantineProvider } from "@mantine/core";
export const metadata: Metadata = {
  title: "Room Homepage",
  description: "Room Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider
          theme={{
            breakpoints: {
              sm: "640px",
              md: "768px",
              lg: "1024px",
              xl: "1280px",
            },
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
