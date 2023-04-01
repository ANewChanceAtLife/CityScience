"use client";
import styles from "./page.module.css";
import getData from "@/firebase/getAADF";
import { AADF } from "@/types/AADF";
import { useEffect, useState } from "react";
import { AADFTable } from "./components/AADFTable";
import { PageHero } from "./components/Hero";
import { Card, Loader } from "@mantine/core";

const firebaseConfig = {
  apiKey: "AIzaSyAJbjyEmuBqUsZ5SXLN29CyOfVNXGyk_Uw",
  authDomain: "city-science-test.firebaseapp.com",
  databaseURL:
    "https://city-science-test-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "city-science-test",
  storageBucket: "city-science-test.appspot.com",
  messagingSenderId: "459234467355",
  appId: "1:459234467355:web:94eeb6c8758b395b6d62be",
  measurementId: "G-WBSW7E0NYR",
};

export default function Dashboard() {
  const [aadf, setAADF] = useState<AADF[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!aadf.length && !errors) {
      setLoading(true);
      getData("aadf").then(({ result, error }) => {
        if (error) {
          setErrors(error.message);
        } else {
          const mappedData = result?.docs.map((doc) => ({
            ...doc.data(),
          }));
          setTotalRecords(result?.size ?? 0);
          setAADF(mappedData as any);
        }
        setLoading(false);
      });
    }
  }, [aadf, errors]);

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
      <AADFTable data={aadf} />
    </main>
  );
}
