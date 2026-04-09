"use client";

import { getAnalytics, isSupported } from "firebase/analytics";
import { useEffect } from "react";
import { getFirebaseApp } from "@/lib/firebase";

export function FirebaseClientInit() {
  useEffect(() => {
    const app = getFirebaseApp();
    void isSupported().then((ok) => {
      if (ok) {
        getAnalytics(app);
      }
    });
  }, []);

  return null;
}
