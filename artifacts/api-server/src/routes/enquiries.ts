import { Router, type IRouter } from "express";
import rateLimit from "express-rate-limit";
import { db, enquiriesTable, insertEnquirySchema } from "@workspace/db";
import { CreateEnquiryBody } from "@workspace/api-zod";

const router: IRouter = Router();

const enquiryRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many enquiries from this IP. Please try again later." },
});

const trim = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

router.post("/enquiries", enquiryRateLimiter, async (req, res) => {
  const body = (req.body ?? {}) as Record<string, unknown>;
  const normalized = {
    name: trim(body.name),
    phone: trim(body.phone),
    email: trim(body.email),
    institute: trim(body.institute),
    city: trim(body.city),
    plan: trim(body.plan),
    message: trim(body.message),
  };

  const parsed = CreateEnquiryBody.safeParse(normalized);
  if (!parsed.success) {
    res.status(400).json({
      message: parsed.error.issues.map((i) => i.message).join("; "),
    });
    return;
  }

  const data = insertEnquirySchema.parse({
    name: parsed.data.name,
    phone: parsed.data.phone,
    email: parsed.data.email ?? "",
    institute: parsed.data.institute,
    city: parsed.data.city ?? "",
    plan: parsed.data.plan ?? "",
    message: parsed.data.message ?? "",
  });

  const [created] = await db.insert(enquiriesTable).values(data).returning();

  req.log.info({ enquiryId: created.id }, "Enquiry stored");

  res.status(201).json({
    ...created,
    createdAt: created.createdAt.toISOString(),
  });
});

export default router;
