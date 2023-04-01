"use client";
import { NestedNav } from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import cx from "classnames";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className, styles.body)}>
        <NestedNav />
        <div className={styles.content}>{children}</div>
      </body>
    </html>
  );
}
