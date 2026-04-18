// Paste your Google Apps Script Web App URL here.
// It should look like: https://script.google.com/macros/s/AKfycbx.../exec
export const GOOGLE_SCRIPT_URL = "";

export type EnquiryPayload = {
  name: string;
  phone: string;
  email: string;
  institute: string;
  city: string;
  plan: string;
  message: string;
};

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error(
      "Google Sheet is not connected yet. Please add your Apps Script URL in src/lib/enquiry.ts.",
    );
  }

  const formData = new FormData();
  formData.append("timestamp", new Date().toISOString());
  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value ?? "");
  });

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Submission failed (${response.status})`);
  }
}
