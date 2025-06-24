import { initializeApp, getApps, App, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "@/service_key.json";
import { ServiceAccount } from "firebase-admin";

let app: App;

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);
export { app as adminApp, adminDb };
