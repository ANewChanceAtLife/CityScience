"use client";

import { AADFTable } from "./components/AADFTable";
import { PageHero } from "./components/Hero";
import { Card, Loader } from "@mantine/core";

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
      <PageHero totalRecords={0} />
      <AADFTable data={[]} />
    </main>
  );
}
