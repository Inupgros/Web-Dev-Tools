import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Globe,
  MessageCircle,
  TrendingUp,
  Users,
  Zap,
  Star,
  Newspaper,
  Target,
  BarChart3,
  BookOpen,
  UserPlus,
  FileCheck,
  GraduationCap,
  Wallet,
  ArrowRight,
  Phone,
  MapPin,
  Compass,
  Map,
  Lightbulb,
  Building2,
  ShieldCheck,
  Clock,
  Gift,
  Play,
  Award,
  Sparkles
} from "lucide-react";
import careerHomeSrc from "@assets/screenshots/dev-frontend-inupgro-career-pathway_vercel_app.png";
import careerExploreSrc from "@assets/screenshots/dev-frontend-inupgro-career-pathway_vercel_app_public-explore.png";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </motion.span>
  );
}

function FlipScreenshots({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setFlipped((f) => !f), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full cursor-pointer"
      style={{ perspective: 1200 }}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full"
      >
        <div style={{ backfaceVisibility: "hidden" }} className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white">
          <img src={front} alt="Inupgro Career Pathway - Your Future, Mapped Out" className="w-full h-auto" />
        </div>
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white"
        >
          <img src={back} alt="Explore 600+ Career Paths on Inupgro" className="w-full h-auto object-cover" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative font-sans overflow-x-hidden">

      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-extrabold text-lg leading-none">I</span>
            </div>
            <span className="text-[22px] font-extrabold tracking-tight text-primary">INUPGRO</span>
          </a>
          <div className="hidden md:flex items-center space-x-1">
            {[
              { label: "Why Inupgro", href: "#why" },
              { label: "Pricing", href: "#pricing" },
              { label: "Career Pathway", href: "#career" },
              { label: "Features", href: "#features" }
            ].map((link) => (
              <a key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                {link.label}
              </a>
            ))}
          </div>
          <a href="https://wa.me/918441879640" target="_blank" rel="noopener noreferrer">
            <Button data-testid="nav-cta-contact" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-5 shadow-sm hover:shadow-md transition-all rounded-xl">
              Contact Us
            </Button>
          </a>
        </div>
      </nav>

      <section className="relative pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-[0.07]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-[hsl(210,73%,20%)]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-sm font-medium text-blue-100">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                Trusted by 500+ Institutes Across India
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-[2.75rem] md:text-[4.5rem] font-extrabold tracking-[-0.02em] text-white leading-[1.08]">
                Your Institute Deserves a{" "}
                <span className="relative inline-block mt-1">
                  <span className="text-secondary">Digital Edge</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/40 rounded-full origin-left"
                  />
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-blue-100/80 font-medium max-w-2xl mx-auto leading-relaxed">
                A professional website and AI-powered career guidance -- everything your institute needs to attract students and stand out, starting at just ₹35,000. Plus, 9 management tools launching soon -- free for your first year.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <a href="https://wa.me/918441879640" target="_blank" rel="noopener noreferrer">
                  <Button data-testid="hero-cta-join" size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg shadow-secondary/25 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all">
                    Get Started Today
                  </Button>
                </a>
                <a href="#pricing">
                  <Button data-testid="hero-cta-learn" size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base bg-white/[0.06] hover:bg-white/[0.12] text-white border-white/20 backdrop-blur-sm rounded-xl hover:scale-[1.02] transition-all">
                    View Plans <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-8 md:gap-16 mt-16 md:mt-20 pt-10 border-t border-white/10"
          >
            {[
              { num: 500, suffix: "+", label: "Institutes Onboarded" },
              { num: 50000, suffix: "+", label: "Students Impacted" },
              { num: 10, suffix: " Yrs", label: "Website Validity" },
              { num: 98, suffix: "%", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-white">
                  <AnimatedCounter value={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-blue-200/70 font-medium mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="why" className="py-20 md:py-28 bg-gradient-to-b from-gray-50/80 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-5">
              <Award className="w-4 h-4" />
              The Problem We Solve
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">Why Do 500+ Institutes Choose INUPGRO?</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">Most institutes lose students to competitors simply because they lack a professional online presence. Parents today Google before they visit. Without a website, you're invisible. Inupgro changes that -- giving you a digital identity that builds trust, attracts enquiries, and fills seats.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe, title: "Be Found Online", desc: "Today's parents search online before choosing a school. Your professional website ensures they find you first -- not your competitor.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { icon: TrendingUp, title: "Increase Admissions", desc: "A professional website with WhatsApp integration means every parent who finds you can reach you instantly -- turning visitors into real enquiries.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
              { icon: GraduationCap, title: "Stand Out with Career Guidance", desc: "Offer something no other school does -- free AI-powered career guidance for students. Parents value this, and it drives enrollments.", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.12 } } }} className={`bg-white p-8 rounded-2xl shadow-sm border ${item.border} text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}>
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mt-12">
            <p className="text-lg font-semibold text-primary/80 italic">"When parents can't find you online, they find someone else."</p>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 text-blue-100 text-sm font-semibold mb-5">
              <Sparkles className="w-4 h-4 text-secondary" />
              One Investment, Three Powerful Benefits
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-4 leading-tight">What You Get with INUPGRO</h2>
            <p className="text-base md:text-lg text-blue-100/70 leading-relaxed">Pay once. Get a professional website for 10 years, free career guidance for your students, and an entire school management platform -- all bundled together.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-white rounded-3xl p-7 lg:p-8 shadow-2xl shadow-black/20 border-2 border-secondary relative text-gray-900 md:-translate-y-3">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-secondary to-amber-400 text-secondary-foreground px-5 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                Core Offering
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-5">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-1.5">Professional Website</h3>
              <p className="text-sm text-gray-500 mb-6">Your digital identity -- designed to attract admissions</p>

              <div className="grid grid-cols-2 gap-3 mb-7">
                <div className="border-2 border-gray-200 rounded-2xl p-4 text-center bg-gray-50/50">
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">5 Years</p>
                  <p className="text-3xl font-extrabold text-primary tracking-tight leading-none">₹35,000</p>
                  <p className="text-[11px] text-gray-500 mt-2 font-medium">One-time</p>
                </div>
                <div className="border-2 border-secondary bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 text-center relative shadow-md shadow-amber-200/40">
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm">Best Value</span>
                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">10 Years</p>
                  <p className="text-3xl font-extrabold text-primary tracking-tight leading-none">₹50,000</p>
                  <p className="text-[11px] text-emerald-700 font-bold mt-2">Save ₹20,000</p>
                </div>
              </div>

              <ul className="space-y-3 text-gray-700 text-[14px] mb-6">
                {[
                  "Custom-designed, admission-focused website",
                  "Domain name + hosting included",
                  "SSL security certificate (free)",
                  "WhatsApp chat & enquiry forms",
                  "Google-optimized for local search (SEO)",
                  "Ongoing maintenance & technical support",
                  "Fully mobile-responsive design"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-snug">
                    <CheckCircle2 className="w-[18px] h-[18px] text-secondary shrink-0 mt-0.5" /> <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50/70 border border-amber-200 rounded-2xl p-4 mb-4">
                <p className="text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Complimentary Add-Ons
                </p>
                <ul className="space-y-2 text-[13px] text-amber-900 font-medium">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" /> <span>Free professional photoshoot</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" /> <span>Director's message video</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" /> <span>Career counselling session</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-4 mb-5">
                <p className="text-[13px] font-semibold text-emerald-800 flex items-start gap-2 leading-snug">
                  <Gift className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" /> <span>Bonus: Unlocks <span className="font-extrabold">FREE Career Pathway Tool</span> + 1 Year FREE access to all 9 platform features</span>
                </p>
              </div>
              <a href="https://wa.me/918441879640?text=I'm%20interested%20in%20Website%20Development" target="_blank" rel="noopener noreferrer">
                <Button data-testid="pricing-website-cta" className="w-full h-12 text-base bg-primary hover:bg-primary/90 rounded-xl font-bold hover:shadow-lg transition-all">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1 } } }} className="bg-white/[0.06] border border-white/[0.12] rounded-3xl p-7 lg:p-8 backdrop-blur-md relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                Free with Website
              </div>
              <div className="w-12 h-12 bg-purple-500/15 rounded-2xl flex items-center justify-center mb-5">
                <Compass className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-1">Career Pathway Tool</h3>
              <p className="text-sm text-blue-200/60 mb-5">Give students a reason to choose YOUR institute</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">FREE</span>
              </div>
              <p className="text-xs text-blue-200/60 mb-7">Included free with your website contract</p>
              <ul className="space-y-2.5 text-blue-100/80 text-sm mb-7">
                {[
                  { text: "600+ career paths mapped out", color: "text-purple-400" },
                  { text: "Personalized step-by-step roadmaps", color: "text-purple-400" },
                  { text: "15,000+ college recommendations", color: "text-purple-400" },
                  { text: "Live salary & job market data", color: "text-purple-400" },
                  { text: "Expert tips from industry professionals", color: "text-purple-400" },
                  { text: "24/7 AI-powered career assistant", color: "text-purple-400" },
                  { text: "Your institute showcased to students", color: "text-purple-400" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className={`w-4 h-4 ${item.color} shrink-0`} /> {item.text}
                  </li>
                ))}
              </ul>
              <div className="bg-purple-500/10 border border-purple-400/20 rounded-xl p-3.5 mb-5">
                <p className="text-xs font-semibold text-purple-200/80 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" /> Requires website contract with Inupgro (website is mandatory)
                </p>
              </div>
              <a href="https://wa.me/918441879640?text=I'm%20interested%20in%20the%20Career%20Pathway%20Tool" target="_blank" rel="noopener noreferrer">
                <Button data-testid="pricing-career-cta" variant="outline" className="w-full h-12 text-base bg-white/[0.06] hover:bg-white/[0.12] text-white border-white/20 rounded-xl font-bold hover:shadow-lg transition-all">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }} className="bg-white/[0.06] border border-white/[0.12] rounded-3xl p-7 lg:p-8 backdrop-blur-md relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                <Clock className="w-3 h-3" /> Launching Soon
              </div>
              <div className="w-12 h-12 bg-amber-500/15 rounded-2xl flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-1">9 Platform Features</h3>
              <p className="text-sm text-blue-200/60 mb-5">Run your entire institute from one dashboard</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">1 Year FREE</span>
              </div>
              <p className="text-xs text-blue-200/60 mb-7">For institutes with website contract</p>
              <ul className="space-y-2.5 text-blue-100/80 text-sm mb-7">
                {[
                  "Enhanced School Visibility", "Educational School News", "Targeted Marketing",
                  "Track Performance", "Knowledge to Income", "One-Click Onboarding",
                  "Admission Results", "Scholarship Framework", "Smart Fee Ecosystem"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="bg-amber-500/10 border border-amber-400/20 rounded-xl p-3.5 mb-5">
                <p className="text-xs font-semibold text-amber-200/80 flex items-start gap-2">
                  <Gift className="w-4 h-4 shrink-0 mt-0.5" /> Free for 1 year with website contract -- no risk, cancel anytime after
                </p>
              </div>
              <a href="https://wa.me/918441879640?text=I'm%20interested%20in%20the%20Platform%20Features" target="_blank" rel="noopener noreferrer">
                <Button data-testid="pricing-features-cta" variant="outline" className="w-full h-12 text-base bg-white/[0.06] hover:bg-white/[0.12] text-white border-white/20 rounded-xl font-bold hover:shadow-lg transition-all">
                  Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mt-12">
            <p className="text-blue-100/70 text-base font-medium">Starting at less than ₹20 per day for a complete digital presence. <span className="text-secondary font-bold">One contract, three powerful benefits.</span></p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-r from-secondary via-secondary to-amber-400 text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_70%)]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInScale}>
            <h2 className="text-xl md:text-3xl font-extrabold mb-3">Why Pay Lakhs When You Can Start at Just ₹35,000?</h2>
            <p className="text-base md:text-xl font-semibold max-w-3xl mx-auto">
              Other companies charge ₹1-5 Lakhs for a website alone. With Inupgro, you get a <span className="bg-primary/10 px-2 py-0.5 rounded-md">long-term website</span> + <span className="bg-primary/10 px-2 py-0.5 rounded-md">Free Career Pathway</span> + <span className="bg-primary/10 px-2 py-0.5 rounded-md">1 Year Free Platform</span> -- all in one.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">Go Digital in 4 Simple Steps</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">No technical knowledge needed. We handle everything -- you just focus on educating.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>
            {[
              { num: "1", title: "Send Us a Message", desc: "Tap the WhatsApp button or call us. Tell us about your institute -- that's all we need to get started.", icon: Phone },
              { num: "2", title: "We Build Your Website", desc: "Our team designs a professional, mobile-friendly website tailored to your institute within days.", icon: Globe },
              { num: "3", title: "Go Live & Get Noticed", desc: "Your website goes live with SEO, WhatsApp chat, and enquiry forms. Career Pathway Tool activates instantly.", icon: Play },
              { num: "4", title: "Watch Admissions Grow", desc: "Start receiving enquiries from parents who find you online. Track, manage, and grow -- all from one place.", icon: TrendingUp }
            ].map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.12 } } }} className="relative flex flex-col items-center text-center group">
                <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white text-2xl font-extrabold flex items-center justify-center mb-5 shadow-xl group-hover:scale-105 transition-transform duration-300">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="py-20 md:py-28 bg-gradient-to-b from-gray-50/80 to-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-5">
              <Compass className="w-4 h-4" />
              FREE with Website Contract
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">The Career Guidance Tool That Sets Your Institute Apart</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">Most schools offer academics. Yours will also offer AI-powered career guidance covering 600+ career paths -- from Class 6 onwards. Students get clarity on their future, and parents see your institute as one that truly cares. It's completely free with your Inupgro website.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-7">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "600+", label: "Career Paths", bg: "bg-purple-50", color: "text-purple-700" },
                  { value: "15k+", label: "Colleges", bg: "bg-blue-50", color: "text-blue-700" },
                  { value: "98%", label: "Satisfaction", bg: "bg-emerald-50", color: "text-emerald-700" },
                  { value: "24/7", label: "AI Support", bg: "bg-amber-50", color: "text-amber-700" }
                ].map((stat, i) => (
                  <div key={i} className={`${stat.bg} p-5 rounded-2xl text-center border border-white shadow-sm`}>
                    <div className={`text-2xl font-extrabold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-4">
                {[
                  { icon: Map, title: "Step-by-Step Roadmaps", desc: "Students see exactly what skills, courses, and exams they need -- no more confusion about 'what to do after 10th or 12th.'" },
                  { icon: Lightbulb, title: "Expert Pro-Tips", desc: "Practical advice from industry professionals who have actually walked the path -- not generic career counseling." },
                  { icon: Building2, title: "15,000+ College Matches", desc: "Students get matched to the right colleges based on their career goals, location, budget, and academic profile." },
                  { icon: TrendingUp, title: "Live Salary & Job Data", desc: "Real-time data on salary ranges, job demand, and industry growth across India -- so students make informed choices." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 group">
                    <div className="mt-0.5 w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0 group-hover:bg-purple-100 transition-colors">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-[15px]">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-purple-50 to-purple-50/50 border border-purple-200/60 rounded-2xl p-5">
                <p className="text-sm font-bold text-purple-800 mb-1">How Does Your Institute Benefit?</p>
                <p className="text-sm text-purple-600 leading-relaxed">Your institute gets showcased on the Career Pathway platform, visible to thousands of students exploring careers. Parents see you as a forward-thinking school. All free with your Inupgro website contract.</p>
              </div>

              <a href="https://wa.me/918441879640?text=I'm%20interested%20in%20the%20Career%20Pathway%20Tool" target="_blank" rel="noopener noreferrer">
                <Button data-testid="career-cta-explore" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-lg shadow-purple-200/50 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all">
                  Get Career Pathway Access <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative" style={{ perspective: 1200 }}>
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-100/40 to-blue-100/30 rounded-[2rem] blur-2xl -z-10"></div>
              <FlipScreenshots front={careerHomeSrc} back={careerExploreSrc} />
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6 mt-12 lg:mt-20">
            {[
              { title: "For Students", desc: "No more guessing about the future. Explore 600+ career paths, understand what each career requires, see salary data, and get a step-by-step roadmap -- all from Class 6 onwards.", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { title: "For Schools & Colleges", desc: "Become the institute that offers career clarity, not just academics. Get showcased on the platform, attract more enrollments, and give parents a compelling reason to choose you.", icon: Building2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
              { title: "For Parents", desc: "Finally, a data-backed way to guide your child's career. No more relying on opinions -- see real salary data, job demand, and clear roadmaps for every career option.", icon: Users, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" }
            ].map((card, i) => (
              <motion.div key={i} variants={fadeInUp} className={`bg-white p-7 rounded-2xl shadow-sm border ${card.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}>
                <div className={`w-13 h-13 ${card.bg} rounded-2xl flex items-center justify-center mb-5 w-14 h-14 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className={`w-7 h-7 ${card.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-5">
              <Clock className="w-4 h-4" />
              Launching Soon -- Free for 1 Year with Website Contract
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">9 Tools to Run Your Institute Smarter</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">From admissions to fee collection, marketing to scholarships -- manage everything from one platform. All 9 features are free for 1 year when you sign up for a website with Inupgro.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { icon: Globe, title: "Enhanced School Visibility", desc: "Get listed on the Inupgro network so parents and students discover your institute organically -- beyond just your own website.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { icon: Newspaper, title: "Educational School News", desc: "Publish achievements, events, and updates that parents actually see -- build trust and community engagement effortlessly.", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
              { icon: Target, title: "Targeted Marketing", desc: "Reach the right parents in your area with AI-powered campaigns. Stop wasting money on flyers -- go digital.", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
              { icon: BarChart3, title: "Track School Performance", desc: "See which classes, teachers, and subjects are performing best. Make data-driven decisions instead of guessing.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
              { icon: BookOpen, title: "Turn Knowledge into Income", desc: "Teachers can earn ₹2,000 per topic shared on the platform. Your staff creates content, Inupgro pays them.", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
              { icon: UserPlus, title: "One-Click Onboarding", desc: "Register new students, teachers, and staff in seconds -- no paperwork, no manual data entry, no hassle.", color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100" },
              { icon: FileCheck, title: "Admission Result Publishing", desc: "Publish admission results online instantly. Parents check results themselves -- saving your staff hours of phone calls.", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
              { icon: GraduationCap, title: "Scholarship Framework", desc: "Create, manage, and distribute scholarships digitally. Students apply online, you review and approve -- all in one place.", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
              { icon: Wallet, title: "Smart Fee Ecosystem", desc: "Generate invoices, send payment reminders via WhatsApp, and track who's paid and who hasn't -- all automatically.", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" }
            ].map((feat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.06 } } }} className={`bg-white p-7 rounded-2xl shadow-sm border ${feat.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative`}>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 text-[11px] font-bold uppercase tracking-wider">
                    <Clock className="w-3 h-3" /> Coming Soon
                  </span>
                </div>
                <div className={`w-12 h-12 ${feat.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feat.icon className={`w-6 h-6 ${feat.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 pr-20">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">Hear from Institute Leaders Like You</h2>
            <p className="text-base md:text-lg text-gray-500">Real feedback from schools, colleges, and coaching centres already growing with Inupgro.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Rajesh Kumar", inst: "Sunshine Public School, Jaipur", text: "Before Inupgro, we had no online presence and were losing students to competitors with websites. Within weeks of going live, we started getting WhatsApp enquiries from parents who found us on Google. The Career Pathway tool is something parents genuinely value." },
              { name: "Priya Sharma", inst: "Excel Coaching Institute", text: "I was spending ₹15,000 every year on a basic website that looked outdated. With Inupgro, I paid ₹50,000 once and got a professional website for 10 years, plus the Career Pathway tool and platform features for free. It's the smartest investment I've made for my institute." },
              { name: "Dr. A. Verma", inst: "Global Degree College", text: "What convinced me was the value -- a 10-year website, career guidance for students, and soon an entire management platform. We now receive 5-10 enquiries via WhatsApp every week just from the website. The upcoming fee management and scholarship tools will save us hours of manual work." }
            ].map((test, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }} className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 relative hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">"{test.text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-sm">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{test.name}</div>
                    <div className="text-xs text-gray-400">{test.inst}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">Frequently Asked Questions</h2>
            <p className="text-base md:text-lg text-gray-500">Everything you need to know about Inupgro.</p>
          </motion.div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {[
              { q: "What does the website package include?", a: "You get a professionally designed, mobile-responsive website with your own domain name, fast hosting, SSL security, WhatsApp chat integration, enquiry/admission forms, Google SEO optimization, and ongoing maintenance. We offer two plans: ₹35,000 for 5 years or ₹50,000 for 10 years (best value -- save ₹20,000). Plus complimentary add-ons: free professional photoshoot, director's message video, and a career counselling session. The Career Pathway Tool is also included free." },
              { q: "Is the Career Pathway Tool really free?", a: "Yes, 100% free for your institute and students. The only requirement is a website contract with Inupgro (starting at ₹35,000). Once your website is live, the Career Pathway Tool is activated at no extra cost. Your institute also gets showcased on the platform, which helps attract more student enquiries." },
              { q: "What are the 9 platform features and when do they launch?", a: "The 9 features cover everything from targeted marketing and performance tracking to fee management and scholarship distribution. They are launching soon and will be completely free for 1 year for all institutes with a website contract. After the first year, affordable subscription plans will be available -- but you can cancel anytime." },
              { q: "I already have a website. Can I still benefit?", a: "Yes. If your current website isn't generating enquiries or looks outdated, we'll build you a modern, admission-focused website designed to convert visitors into leads. If you already have a domain (like yourschool.com), we'll seamlessly connect it to your new Inupgro website." },
              { q: "Do you provide support after the website goes live?", a: "Absolutely. Our team provides ongoing technical support for the entire 10-year period. Content updates like changing a phone number, adding a notice, or updating photos are handled promptly. You're never left on your own." },
              { q: "Why is Inupgro so affordable compared to others?", a: "Most web agencies charge ₹1-5 Lakhs for a school website and additional yearly maintenance fees. Inupgro's mission is to make digital transformation accessible to every institute in India. By standardizing our process, we deliver high-quality websites at a fraction of the cost -- and bundle career guidance and management tools for free." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i + 1}`} className="bg-gray-50 border border-gray-100 rounded-2xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-sm data-[state=open]:border-gray-200 transition-all">
                <AccordionTrigger data-testid={`faq-trigger-${i + 1}`} className="text-base font-semibold hover:no-underline text-left py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-[15px] pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop')] bg-cover bg-center opacity-[0.06]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-[hsl(210,73%,20%)]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2"></div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">Your Competitors Are Already Online. Are You?</h2>
            <p className="text-base md:text-lg text-blue-100/70 mb-3 leading-relaxed">Every day without a website, your institute is invisible to parents searching for schools on Google. Join 500+ institutes who have already taken the digital leap with Inupgro.</p>
            <p className="text-lg text-secondary font-bold mb-10">Starting at ₹35,000. Career guidance, free photoshoot, director's video & management tools included.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/918441879640" target="_blank" rel="noopener noreferrer">
                <Button data-testid="final-cta-join" size="lg" className="h-14 px-8 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-xl shadow-lg shadow-secondary/25 hover:shadow-xl hover:scale-[1.02] transition-all">
                  Join INUPGRO Today
                </Button>
              </a>
              <a href="tel:+918441879640">
                <Button data-testid="final-cta-call" size="lg" variant="outline" className="h-14 px-8 text-base bg-white/[0.06] hover:bg-white/[0.12] text-white border-white/20 backdrop-blur-sm rounded-xl hover:scale-[1.02] transition-all">
                  <Phone className="mr-2 w-4 h-4" /> Call: +91 84418 79640
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 border-b border-gray-800/60 pb-10 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                  <span className="text-white font-extrabold text-lg leading-none">I</span>
                </div>
                <span className="text-xl font-extrabold text-white tracking-tight">INUPGRO</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">India's most affordable digital ecosystem for educational institutes. Professional websites, AI career guidance, and school management tools -- all in one platform.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-secondary" /> +91 84418 79640</li>
                <li className="flex items-center gap-2.5"><Globe className="w-4 h-4 text-secondary" /> www.inupgro.com</li>
                <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-secondary" /> Jhalana Gram, Malviya Nagar, Jaipur (Raj)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#why" className="hover:text-white transition-colors">Why Inupgro</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#career" className="hover:text-white transition-colors">Career Pathway</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Platform Features</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} INUPGRO. All rights reserved.
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/918441879640"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="fab-whatsapp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:bg-green-600 transition-all hover:scale-110 duration-300"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}
