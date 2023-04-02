"use client";

import { AADFTable } from "./components/AADFTable";
import { PageHero } from "./components/Hero";
import { Card, Loader } from "@mantine/core";
import { Stats } from "./components/Stats";

export default function Dashboard() {
  const loading: boolean = false;

  if (loading) {
    return (
      <Card>
        <Loader variant="bars" />
      </Card>
    );
  }

  return (
    <main>
      <PageHero />
      <Stats />
      <AADFTable />
    </main>
  );
}
