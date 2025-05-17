import { createWorker } from "tesseract.js";
import { generateText } from "./gemeni";

export async function performOCR(imageData) {
  const worker = await createWorker("eng");

  try {
    const {
      data: { text },
    } = await worker.recognize(imageData);
    await worker.terminate();

    return extractVisitorInfo(text);
  } catch (error) {
    console.error("OCR Error:", error);
    await worker.terminate();
    throw error;
  }
}

async function extractVisitorInfo(text) {
  const response = await generateText(text);
  return response;
}
