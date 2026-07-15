import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";
import { submitEnquiry } from "@/lib/enquiry";
import { cn } from "@/lib/utils";

type Props = {
  trigger: ReactNode;
  defaultPlan?: string;
  title?: string;
  description?: string;
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  institute: string;
  city: string;
  plan: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const NAME_REGEX = /^[a-zA-Z\u00C0-\u024F\u0900-\u097F .'-]+$/;
const PHONE_DIGITS_REGEX = /\D/g;
const INDIAN_PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateField(key: keyof FormState, value: string): string | undefined {
  const trimmed = value.trim();
  switch (key) {
    case "name":
      if (!trimmed) return "Please enter your name.";
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
      if (trimmed.length > 80) return "Name is too long.";
      if (!NAME_REGEX.test(trimmed))
        return "Use letters, spaces, dots, hyphens or apostrophes only.";
      return undefined;
    case "phone": {
      if (!trimmed) return "Phone number is required.";
      const digits = trimmed.replace(PHONE_DIGITS_REGEX, "");
      const local = digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
      if (local.length !== 10) return "Enter a 10-digit mobile number.";
      if (!INDIAN_PHONE_REGEX.test(local))
        return "Mobile number must start with 6, 7, 8 or 9.";
      return undefined;
    }
    case "email":
      if (!trimmed) return undefined;
      if (trimmed.length > 120) return "Email is too long.";
      if (!EMAIL_REGEX.test(trimmed)) return "Enter a valid email address.";
      return undefined;
    case "institute":
      if (!trimmed) return "Institute name is required.";
      if (trimmed.length < 2) return "Institute name is too short.";
      if (trimmed.length > 120) return "Institute name is too long.";
      return undefined;
    case "city":
      if (!trimmed) return undefined;
      if (trimmed.length < 2) return "City name is too short.";
      if (trimmed.length > 60) return "City name is too long.";
      return undefined;
    case "message":
      if (trimmed.length > 1000) return "Message must be under 1000 characters.";
      return undefined;
    default:
      return undefined;
  }
}

function validateAll(form: FormState): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(form) as Array<keyof FormState>).forEach((key) => {
    const err = validateField(key, form[key]);
    if (err) errors[key] = err;
  });
  return errors;
}

export function EnquiryDialog({
  trigger,
  defaultPlan = "Not sure yet",
  title = "Get Started with INUPGRO",
  description = "Share a few quick details and our team will reach out within 24 hours.",
}: Props) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    institute: "",
    city: "",
    plan: defaultPlan,
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const update = (key: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (touched[key] || errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
    }
  };

  const handleBlur = (key: keyof FormState) => () => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateField(key, form[key]) }));
  };

  const reset = () => {
    setSubmitted(false);
    setErrors({});
    setTouched({});
    setForm({
      name: "",
      phone: "",
      email: "",
      institute: "",
      city: "",
      plan: defaultPlan,
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const allErrors = validateAll(form);
    setErrors(allErrors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      institute: true,
      city: true,
      message: true,
    });

    if (Object.keys(allErrors).length > 0) {
      const firstKey = Object.keys(allErrors)[0] as keyof FormState;
      toast({
        title: "Please fix the highlighted fields",
        description: allErrors[firstKey],
        variant: "destructive",
      });
      const el = document.getElementById(`enq-${firstKey}`);
      el?.focus();
      return;
    }

    setSubmitting(true);
    try {
      await submitEnquiry({
        ...form,
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        institute: form.institute.trim(),
        city: form.city.trim(),
        message: form.message.trim(),
      });
      setSubmitted(true);
      toast({
        title: "Enquiry sent!",
        description: "We've recorded your details. Our team will call you shortly.",
      });
    } catch (err) {
      toast({
        title: "Could not submit",
        description:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again or WhatsApp us at +91 82096 47142.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const errorClass = (key: keyof FormState) =>
    errors[key] ? "border-red-500 focus-visible:ring-red-500" : "";

  const renderError = (key: keyof FormState) =>
    errors[key] ? (
      <p
        className="flex items-center gap-1 text-xs text-red-600"
        data-testid={`enquiry-${key}-error`}
      >
        <AlertCircle className="w-3 h-3" />
        {errors[key]}
      </p>
    ) : null;

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setTimeout(reset, 200);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl font-extrabold text-gray-900">Thank you!</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
                Your enquiry has been recorded. Our team will call you on{" "}
                <span className="font-semibold text-gray-700">{form.phone}</span> within 24 hours.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => setOpen(false)}
              className="bg-primary hover:bg-primary/90 rounded-xl"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                Free consultation
              </div>
              <DialogTitle className="text-2xl font-extrabold text-primary">
                {title}
              </DialogTitle>
              <DialogDescription className="text-gray-500">
                {description}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} noValidate className="space-y-4 mt-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="enq-name">
                    Your Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="enq-name"
                    data-testid="enquiry-name"
                    value={form.name}
                    onChange={(e) => update("name")(e.target.value)}
                    onBlur={handleBlur("name")}
                    placeholder="e.g. Rajesh Kumar"
                    aria-invalid={Boolean(errors.name)}
                    className={cn(errorClass("name"))}
                    autoComplete="name"
                    maxLength={80}
                  />
                  {renderError("name")}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="enq-phone">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="enq-phone"
                    data-testid="enquiry-phone"
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={(e) => update("phone")(e.target.value)}
                    onBlur={handleBlur("phone")}
                    placeholder="10-digit mobile number"
                    aria-invalid={Boolean(errors.phone)}
                    className={cn(errorClass("phone"))}
                    autoComplete="tel"
                    maxLength={15}
                  />
                  {renderError("phone")}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="enq-institute">
                  Institute Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="enq-institute"
                  data-testid="enquiry-institute"
                  value={form.institute}
                  onChange={(e) => update("institute")(e.target.value)}
                  onBlur={handleBlur("institute")}
                  placeholder="e.g. Sunshine Public School"
                  aria-invalid={Boolean(errors.institute)}
                  className={cn(errorClass("institute"))}
                  autoComplete="organization"
                  maxLength={120}
                />
                {renderError("institute")}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="enq-city">City</Label>
                  <Input
                    id="enq-city"
                    data-testid="enquiry-city"
                    value={form.city}
                    onChange={(e) => update("city")(e.target.value)}
                    onBlur={handleBlur("city")}
                    placeholder="e.g. Jaipur"
                    aria-invalid={Boolean(errors.city)}
                    className={cn(errorClass("city"))}
                    autoComplete="address-level2"
                    maxLength={60}
                  />
                  {renderError("city")}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="enq-email">Email (optional)</Label>
                  <Input
                    id="enq-email"
                    data-testid="enquiry-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email")(e.target.value)}
                    onBlur={handleBlur("email")}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className={cn(errorClass("email"))}
                    autoComplete="email"
                    maxLength={120}
                  />
                  {renderError("email")}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="enq-plan">I'm interested in</Label>
                <Select value={form.plan} onValueChange={update("plan")}>
                  <SelectTrigger id="enq-plan" data-testid="enquiry-plan">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-Year Website Plan (₹15,000)">
                      1-Year Website Plan (₹15,000)
                    </SelectItem>
                    <SelectItem value="5-Year Website Plan (₹50,000)">
                      5-Year Website Plan (₹50,000)
                    </SelectItem>
                    <SelectItem value="10-Year Website Plan (₹80,000)">
                      10-Year Website Plan (₹80,000)
                    </SelectItem>
                    <SelectItem value="Career Pathway Tool">
                      Career Pathway Tool
                    </SelectItem>
                    <SelectItem value="Platform Features (Waitlist)">
                      Platform Features (Waitlist)
                    </SelectItem>
                    <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="enq-message">Message (optional)</Label>
                  <span className="text-[11px] text-gray-400">
                    {form.message.length}/1000
                  </span>
                </div>
                <Textarea
                  id="enq-message"
                  data-testid="enquiry-message"
                  value={form.message}
                  onChange={(e) => update("message")(e.target.value)}
                  onBlur={handleBlur("message")}
                  placeholder="Anything you'd like us to know..."
                  rows={3}
                  aria-invalid={Boolean(errors.message)}
                  className={cn(errorClass("message"))}
                  maxLength={1000}
                />
                {renderError("message")}
              </div>

              <Button
                type="submit"
                data-testid="enquiry-submit"
                disabled={submitting}
                className="w-full h-12 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-xl"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </Button>

              <p className="text-[11px] text-center text-gray-400">
                By submitting, you agree to be contacted by INUPGRO regarding your enquiry.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
