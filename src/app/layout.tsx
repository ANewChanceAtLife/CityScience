"use client";
import { NestedNav } from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import cx from "classnames";
import { useLocalStorage } from "@mantine/hooks";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "D4BICDSYQT",
  "e99f082bce641f704ee4e49c78348733"
);

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "ui-colour-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <html lang="en">
      <head className={styles.header}>
        <link
          href="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css"
          rel="stylesheet"
        />
      </head>
      <body className={styles.body}>
        <InstantSearch searchClient={searchClient} indexName="AADF">
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              theme={{ colorScheme }}
              withGlobalStyles
              withNormalizeCSS
            >
              <NestedNav />
              <div className={styles.content}>{children}</div>
            </MantineProvider>
          </ColorSchemeProvider>
        </InstantSearch>
      </body>
    </html>
  );
}
