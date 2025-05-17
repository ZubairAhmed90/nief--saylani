import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, push } from "firebase/database";
import { db, rtdb } from "./firebase";

export async function addVisitor(visitorData) {
  try {
    // Ensure it's a plain object with allowed values
    const sanitizedData = Object.fromEntries(
      Object.entries(visitorData).filter(
        ([_, value]) =>
          value !== undefined &&
          typeof value !== "function" &&
          typeof value !== "symbol"
      )
    );

    // Store in Firestore
    const docRef = await addDoc(collection(db, "visitors"), {
      ...sanitizedData,
      timestamp: serverTimestamp(), // Firebase server timestamp
    });

    // Store in Realtime DB
    await push(ref(rtdb, "visitors"), {
      ...sanitizedData,
      timestamp: new Date().toISOString(), // ISO timestamp
    });

    return docRef.id;
  } catch (error) {
    console.error("Error adding visitor:", error);
    throw error;
  }
}
