import firebaseConfig from "./config";
import {
  getFirestore,
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
  query,
  where,
  limit,
  orderBy,
} from "firebase/firestore";

const db = getFirestore(firebaseConfig);

type GetAADFResult = {
  result: QuerySnapshot<DocumentData> | null;
  error: Error | null;
};

export default async function getData(
  collectionName: string
): Promise<GetAADFResult> {
  let result = null;
  let error = null;

  const q = query(
    collection(db, collectionName),
    where("year", "==", 2011),
    limit(50)
  );

  try {
    result = await getDocs(q);
  } catch (e: unknown) {
    error = e as Error;
  }

  return { result, error };
}
