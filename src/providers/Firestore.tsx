import { getFirestore } from "firebase/firestore";
import {
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";

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

export function SCFirestoreProvider({ children }: any) {
  const instance = getFirestore(useFirebaseApp());

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirestoreProvider sdk={instance}>{children}</FirestoreProvider>
    </FirebaseAppProvider>
  );
}
