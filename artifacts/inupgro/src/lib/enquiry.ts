import { createEnquiry } from "@workspace/api-client-react";

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
  await createEnquiry({
    name: payload.name.trim(),
    phone: payload.phone.trim(),
    email: payload.email.trim(),
    institute: payload.institute.trim(),
    city: payload.city.trim(),
    plan: payload.plan.trim(),
    message: payload.message.trim(),
  });
}
