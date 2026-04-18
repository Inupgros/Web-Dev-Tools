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
import { Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { submitEnquiry } from "@/lib/enquiry";

type Props = {
  trigger: ReactNode;
  defaultPlan?: string;
  title?: string;
  description?: string;
};

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
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    institute: "",
    city: "",
    plan: defaultPlan,
    message: "",
  });

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const reset = () => {
    setSubmitted(false);
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

    if (!form.name.trim() || !form.phone.trim() || !form.institute.trim()) {
      toast({
        title: "Missing details",
        description: "Please fill in your name, phone number and institute.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      await submitEnquiry(form);
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

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
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
                    placeholder="e.g. Rajesh Kumar"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="enq-phone">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="enq-phone"
                    data-testid="enquiry-phone"
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) => update("phone")(e.target.value)}
                    placeholder="10-digit number"
                    required
                  />
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
                  placeholder="e.g. Sunshine Public School"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="enq-city">City</Label>
                  <Input
                    id="enq-city"
                    data-testid="enquiry-city"
                    value={form.city}
                    onChange={(e) => update("city")(e.target.value)}
                    placeholder="e.g. Jaipur"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="enq-email">Email (optional)</Label>
                  <Input
                    id="enq-email"
                    data-testid="enquiry-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email")(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="enq-plan">I'm interested in</Label>
                <Select value={form.plan} onValueChange={update("plan")}>
                  <SelectTrigger id="enq-plan" data-testid="enquiry-plan">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-Year Website Plan (₹35,000)">
                      5-Year Website Plan (₹35,000)
                    </SelectItem>
                    <SelectItem value="10-Year Website Plan (₹50,000)">
                      10-Year Website Plan (₹50,000)
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
                <Label htmlFor="enq-message">Message (optional)</Label>
                <Textarea
                  id="enq-message"
                  data-testid="enquiry-message"
                  value={form.message}
                  onChange={(e) => update("message")(e.target.value)}
                  placeholder="Anything you'd like us to know..."
                  rows={3}
                />
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
