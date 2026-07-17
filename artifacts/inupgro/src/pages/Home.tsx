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
  Sparkles,
  ExternalLink,
  MonitorSmartphone
} from "lucide-react";
import careerHomeSrc from "@assets/screenshots/dev-frontend-inupgro-career-pathway_vercel_app.png";
import careerExploreSrc from "@assets/screenshots/dev-frontend-inupgro-career-pathway_vercel_app_public-explore.png";
import { EnquiryDialog } from "@/components/EnquiryDialog";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return (
    <motion.span ref={ref} className="text-[24px]">
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
  const [selectedPlan] = useState<"1yr" | "5yr" | "10yr">("10yr");

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
              { label: "Portfolio", href: "#portfolio" },
              { label: "Pricing", href: "#pricing" }
            ].map((link) => (
              <a key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                {link.label}
              </a>
            ))}
          </div>
          <EnquiryDialog
            trigger={
              <Button data-testid="nav-cta-contact" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-5 shadow-sm hover:shadow-md transition-all rounded-xl">
                Contact Us
              </Button>
            }
          />
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
                A professionally designed website that puts your institute on the map -- helping parents find you on Google, enquire via WhatsApp, and choose you over competitors. Starting at just ₹15,000.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <EnquiryDialog
                  trigger={
                    <Button data-testid="hero-cta-join" size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg shadow-secondary/25 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all">
                      Get Started Today
                    </Button>
                  }
                />
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
            className="grid grid-cols-2 sm:flex sm:justify-center gap-y-6 gap-x-4 sm:gap-8 md:gap-16 mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/10"
          >
            {[
              { num: 500, suffix: "+", label: "Institutes Onboarded" },
              { num: 50000, suffix: "+", label: "Students Impacted" },
              { num: 10, suffix: " Yrs", label: "Website Validity" },
              { num: 98, suffix: "%", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="text-center min-w-0">
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white whitespace-nowrap">
                  <AnimatedCounter value={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm text-blue-200/70 font-medium mt-1 uppercase tracking-wider leading-tight">{stat.label}</div>
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
              { icon: GraduationCap, title: "Long-Term Value & Support", desc: "One payment covers you for up to 10 years. Ongoing maintenance, updates, and technical support are all included -- your website always stays fresh.", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" }
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

      {/* ── Portfolio Section ── */}
      <section id="portfolio" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-5">
              <MonitorSmartphone className="w-4 h-4" />
              Our Work
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">Websites We've Built</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">Real institutes, real websites — designed to attract parents, showcase achievements, and drive admissions across India.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              {
                name: "Rajasthan Public School",
                type: "K-12 School",
                city: "Jaipur, Rajasthan",
                tag: "Completed",
                tagColor: "bg-emerald-100 text-emerald-700",
                header: "bg-[#0f172a]",
                accent: "#f59e0b",
                gradient: "from-[#0f172a] via-[#1e3a5f] to-[#0f2d52]",
                barColor: "bg-amber-400",
                logo: "RPS",
                logoColor: "bg-amber-400 text-gray-900",
                navItems: ["Home", "About", "Academics", "Contact"],
                tagline: "Shaping Tomorrow's Leaders",
                desc: "Excellence in Education Since 1998",
              },
              {
                name: "Sunrise Coaching Centre",
                type: "Coaching Institute",
                city: "Jodhpur, Rajasthan",
                tag: "Completed",
                tagColor: "bg-emerald-100 text-emerald-700",
                header: "bg-orange-600",
                accent: "#fff",
                gradient: "from-orange-600 via-orange-500 to-amber-400",
                barColor: "bg-white",
                logo: "SC",
                logoColor: "bg-white text-orange-600",
                navItems: ["Courses", "Results", "Faculty", "Enroll"],
                tagline: "Top Results, Every Year",
                desc: "IIT · NEET · Board Excellence",
              },
              {
                name: "Greenwood International",
                type: "CBSE School",
                city: "Ajmer, Rajasthan",
                tag: "Completed",
                tagColor: "bg-emerald-100 text-emerald-700",
                header: "bg-emerald-700",
                accent: "#fff",
                gradient: "from-emerald-800 via-emerald-700 to-teal-600",
                barColor: "bg-emerald-200",
                logo: "GI",
                logoColor: "bg-white text-emerald-700",
                navItems: ["Home", "Facilities", "Gallery", "Admissions"],
                tagline: "Nurturing Global Citizens",
                desc: "CBSE Affiliated · Classes Nursery–XII",
              },
              {
                name: "Vidya Shakti Academy",
                type: "Skill Training",
                city: "Kota, Rajasthan",
                tag: "Completed",
                tagColor: "bg-emerald-100 text-emerald-700",
                header: "bg-purple-700",
                accent: "#fff",
                gradient: "from-purple-800 via-purple-700 to-indigo-700",
                barColor: "bg-purple-300",
                logo: "VS",
                logoColor: "bg-white text-purple-700",
                navItems: ["Programs", "Batch", "Placement", "Contact"],
                tagline: "Skills That Build Careers",
                desc: "Computer · Spoken English · Tally",
              },
              {
                name: "Future Bright Junior College",
                type: "Junior College",
                city: "Jaipur, Rajasthan",
                tag: "Completed",
                tagColor: "bg-emerald-100 text-emerald-700",
                header: "bg-rose-700",
                accent: "#fff",
                gradient: "from-rose-800 via-rose-700 to-pink-600",
                barColor: "bg-pink-200",
                logo: "FB",
                logoColor: "bg-white text-rose-700",
                navItems: ["Streams", "Faculty", "Results", "Admissions"],
                tagline: "Your Future Starts Here",
                desc: "Science · Commerce · Arts",
              },
              {
                name: "Navjeevan Model School",
                type: "Primary School",
                city: "Bikaner, Rajasthan",
                tag: "Completed",
                tagColor: "bg-emerald-100 text-emerald-700",
                header: "bg-sky-700",
                accent: "#fff",
                gradient: "from-sky-800 via-sky-700 to-blue-600",
                barColor: "bg-sky-200",
                logo: "NM",
                logoColor: "bg-white text-sky-700",
                navItems: ["Home", "Events", "Gallery", "Contact"],
                tagline: "Learning with Love & Joy",
                desc: "Play Group to Class VIII · English Medium",
              },
            ].map((client, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.08 } } }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
              >
                {/* Browser chrome */}
                <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-0.5 text-[10px] text-gray-400 font-mono truncate border border-gray-200">
                    www.{client.name.toLowerCase().replace(/\s+/g, "")}.com
                  </div>
                  <Globe className="w-3 h-3 text-gray-400" />
                </div>

                {/* Website preview mockup */}
                <div className={`bg-gradient-to-br ${client.gradient} h-48 relative overflow-hidden`}>
                  {/* Nav bar */}
                  <div className={`${client.header} px-4 py-2 flex items-center justify-between`}>
                    <div className={`${client.logoColor} rounded text-[10px] font-extrabold px-2 py-0.5`}>{client.logo}</div>
                    <div className="flex gap-3">
                      {client.navItems.slice(0, 3).map((n, ni) => (
                        <div key={ni} className="text-white/70 text-[8px] font-medium">{n}</div>
                      ))}
                    </div>
                    <div className={`${client.barColor} rounded text-[7px] font-bold px-2 py-0.5 text-gray-800`}>Enquire</div>
                  </div>
                  {/* Hero area */}
                  <div className="px-5 pt-5 pb-3">
                    <div className="text-white/40 text-[8px] font-semibold uppercase tracking-widest mb-1">{client.type}</div>
                    <div className="text-white text-base font-extrabold leading-tight mb-1">{client.tagline}</div>
                    <div className="text-white/60 text-[9px] mb-3">{client.desc}</div>
                    <div className={`${client.barColor} rounded-lg text-[8px] font-bold px-3 py-1.5 inline-block text-gray-900`}>Get Admission →</div>
                  </div>
                  {/* Decorative abstract shapes */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-tl-full"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/5 rounded-full"></div>
                </div>

                {/* Card footer */}
                <div className="p-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-sm leading-snug truncate">{client.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{client.type} &nbsp;·&nbsp; {client.city}</p>
                  </div>
                  <span className={`${client.tagColor} text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap`}>{client.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA below portfolio */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
            <p className="text-gray-500 text-sm mb-5">Want a website like these for your institute?</p>
            <a href="https://wa.me/918209647142?text=I%20saw%20your%20portfolio%20and%20want%20a%20website%20for%20my%20institute" target="_blank" rel="noopener noreferrer">
              <Button className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all">
                Get Your Website Built <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </motion.div>

        </div>
      </section>

      <section id="pricing" className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">

          {/* Section header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 text-blue-100 text-sm font-semibold mb-5">
              <Sparkles className="w-4 h-4 text-secondary" />
              One Investment, Three Powerful Benefits
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-4 leading-tight">Simple, Transparent Pricing</h2>
            <p className="text-base md:text-lg text-blue-100/70 leading-relaxed">Choose a plan that fits your budget. Every plan includes domain, hosting, SEO, WhatsApp forms, and free career guidance for your students.</p>
          </motion.div>

          {/* 3 plan cards */}
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-6 items-end">

            {/* 1 Year */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-white/[0.06] border border-white/10 rounded-3xl p-7 flex flex-col hover:border-white/20 transition-all">
              <div className="text-[11px] font-extrabold text-blue-300 uppercase tracking-widest mb-5">1 Year Plan</div>
              <div className="mb-6">
                <div className="text-[2.5rem] font-extrabold text-white leading-none tracking-tight">₹15,000</div>
                <div className="text-sm text-blue-200/60 mt-2">+ GST &nbsp;·&nbsp; One-time payment</div>
              </div>
              <ul className="space-y-2.5 text-blue-100/80 text-sm mb-8 flex-1">
                {[
                  "Custom-designed website",
                  "Domain name + hosting",
                  "SSL security certificate",
                  "WhatsApp chat & enquiry forms",
                  "Google SEO optimized",
                  "Maintenance & support",
                  "Mobile-responsive design"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/918209647142?text=I'm%20interested%20in%20the%201-Year%20Website%20Plan%20(%E2%82%B915%2C000)" target="_blank" rel="noopener noreferrer">
                <Button data-testid="pricing-1yr-cta" variant="outline" className="w-full h-11 text-sm bg-white/[0.06] hover:bg-white/[0.14] text-white border-white/20 rounded-xl font-bold transition-all">
                  Get 1-Year Plan <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            {/* 10 Years — FEATURED CENTER, elevated */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1 } } }} className="bg-white rounded-3xl p-7 flex flex-col relative shadow-2xl shadow-black/30 border-2 border-secondary md:-translate-y-4 text-gray-900">
              <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-amber-400 text-secondary-foreground px-5 py-1.5 rounded-full text-xs font-extrabold shadow-lg uppercase tracking-wider whitespace-nowrap">
                ⭐ Best Value
              </div>
              <div className="text-[11px] font-extrabold text-primary/50 uppercase tracking-widest mb-5">10 Years Plan</div>
              <div className="mb-6">
                <div className="text-sm text-red-400 line-through font-semibold mb-1">₹1,50,000</div>
                <div className="text-[2.5rem] font-extrabold text-primary leading-none tracking-tight">₹80,000</div>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="text-sm text-gray-500">+ GST &nbsp;·&nbsp; One-time</span>
                  <span className="bg-emerald-100 text-emerald-700 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">Save 47%</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-gray-700 text-sm mb-6 flex-1">
                {[
                  "Custom-designed website",
                  "Domain name + hosting",
                  "SSL security certificate",
                  "WhatsApp chat & enquiry forms",
                  "Google SEO optimized",
                  "10 years maintenance & support",
                  "Mobile-responsive design"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              {/* Add-ons */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50/80 border border-amber-200 rounded-2xl p-4 mb-5">
                <p className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Complimentary Add-Ons
                </p>
                <ul className="space-y-1.5 text-[12px] text-amber-900 font-medium">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" /> Free professional photoshoot</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" /> Director's message video</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" /> Career counselling session</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" /> Certified counselor — 2 visits/year for Institution, teachers, students &amp; parents</li>
                </ul>
              </div>
              <a href="https://wa.me/918209647142?text=I'm%20interested%20in%20the%2010-Year%20Website%20Plan%20(%E2%82%B980%2C000)" target="_blank" rel="noopener noreferrer">
                <Button data-testid="pricing-website-cta" className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                  Get 10-Year Plan <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            {/* 5 Years */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.15 } } }} className="bg-white/[0.06] border border-white/10 rounded-3xl p-7 flex flex-col hover:border-white/20 transition-all">
              <div className="text-[11px] font-extrabold text-blue-300 uppercase tracking-widest mb-5">5 Years Plan</div>
              <div className="mb-6">
                <div className="text-sm text-red-400/80 line-through font-semibold mb-1">₹75,000</div>
                <div className="text-[2.5rem] font-extrabold text-white leading-none tracking-tight">₹50,000</div>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="text-sm text-blue-200/60">+ GST &nbsp;·&nbsp; One-time</span>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">Save 33%</span>
                </div>
              </div>
              <ul className="space-y-2.5 text-blue-100/80 text-sm mb-8 flex-1">
                {[
                  "Custom-designed website",
                  "Domain name + hosting",
                  "SSL security certificate",
                  "WhatsApp chat & enquiry forms",
                  "Google SEO optimized",
                  "5 years maintenance & support",
                  "Mobile-responsive design"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/918209647142?text=I'm%20interested%20in%20the%205-Year%20Website%20Plan%20(%E2%82%B950%2C000)" target="_blank" rel="noopener noreferrer">
                <Button data-testid="pricing-5yr-cta" variant="outline" className="w-full h-11 text-sm bg-white/[0.06] hover:bg-white/[0.14] text-white border-white/20 rounded-xl font-bold transition-all">
                  Get 5-Year Plan <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mt-10">
            <p className="text-blue-100/60 text-sm">All prices are one-time payments + GST. No hidden charges. No renewal fees. <span className="text-secondary font-semibold">One contract covers everything.</span></p>
          </motion.div>

        </div>
      </section>

      <section className="py-14 bg-gradient-to-r from-secondary via-secondary to-amber-400 text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_70%)]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInScale}>
            <h2 className="text-xl md:text-3xl font-extrabold mb-3">Why Pay Lakhs When You Can Start at Just ₹15,000?</h2>
            <p className="text-base md:text-xl font-semibold max-w-3xl mx-auto">
              Other companies charge ₹1-5 Lakhs for a website alone. With Inupgro, you get a <span className="bg-primary/10 px-2 py-0.5 rounded-md">professional website</span> + <span className="bg-primary/10 px-2 py-0.5 rounded-md">domain & hosting</span> + <span className="bg-primary/10 px-2 py-0.5 rounded-md">10 years of support</span> -- all in one affordable package.
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
              { num: "3", title: "Go Live & Get Noticed", desc: "Your website goes live with SEO, WhatsApp chat, and enquiry forms. Parents start finding you on Google from day one.", icon: Play },
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

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">Hear from Institute Leaders Like You</h2>
            <p className="text-base md:text-lg text-gray-500">Real feedback from schools, colleges, and coaching centres already growing with Inupgro.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Rajesh Kumar", inst: "Sunshine Public School, Jaipur", text: "Before Inupgro, we had no online presence and were losing students to competitors with websites. Within weeks of going live, we started receiving WhatsApp enquiries from parents who found us on Google. Best decision we made for our institute." },
              { name: "Priya Sharma", inst: "Excel Coaching Institute", text: "I was spending a lot every year on a basic website that looked outdated. With Inupgro, I paid ₹80,000 once and got a professional website for 10 years with full support. It's the smartest investment I've made for my institute." },
              { name: "Dr. A. Verma", inst: "Global Degree College", text: "The design is professional, loads fast on mobile, and the WhatsApp integration means every parent who finds us can reach us instantly. We now receive 5-10 enquiries every week just from the website. Worth every rupee." }
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
              { q: "What does the website package include?", a: "You get a professionally designed, mobile-responsive website with your own domain name, fast hosting, SSL security, WhatsApp chat integration, enquiry/admission forms, Google SEO optimization, and ongoing maintenance. We offer three plans: ₹15,000 for 1 year, ₹50,000 for 5 years, or ₹80,000 for 10 years (best value -- save 47%). The 10-year plan also includes complimentary add-ons: a free professional photoshoot, director's message video, career counselling session, and a certified counsellor visiting your institution twice a year." },
              { q: "What is included in the 10-year plan add-ons?", a: "The 10-year plan comes with four exclusive complimentary add-ons at no extra cost: (1) a free professional photoshoot of your institute, (2) a director's message video, (3) a career counselling session, and (4) a certified counsellor who visits your institution twice a year for your teachers, students, and parents." },
              { q: "I already have a website. Can I still benefit?", a: "Yes. If your current website isn't generating enquiries or looks outdated, we'll build you a modern, admission-focused website designed to convert visitors into leads. If you already have a domain (like yourschool.com), we'll seamlessly connect it to your new Inupgro website." },
              { q: "How long does it take to build my website?", a: "Typically 3--7 working days from when we receive your institute details, photos, and content. We handle all the technical setup -- domain, hosting, SSL, WhatsApp integration, SEO -- and hand over a fully live website ready to receive enquiries." },
              { q: "Do you provide support after the website goes live?", a: "Absolutely. Our team provides ongoing technical support for the full duration of your plan -- up to 10 years. Content updates like changing a phone number, adding a notice, or updating photos are handled promptly. You're never left on your own." },
              { q: "Why is Inupgro so affordable compared to others?", a: "Most web agencies charge ₹1-5 Lakhs for a school website and then charge yearly maintenance fees on top. Inupgro's mission is to make digital transformation accessible to every institute in India. By standardizing our process, we deliver high-quality, admission-focused websites at a fraction of the cost -- with no hidden fees." }
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
            <p className="text-lg text-secondary font-bold mb-10">Starting at ₹15,000. Free photoshoot, director's video & certified counsellor included with the 10-year plan.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/918209647142" target="_blank" rel="noopener noreferrer">
                <Button data-testid="final-cta-join" size="lg" className="h-14 px-8 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-xl shadow-lg shadow-secondary/25 hover:shadow-xl hover:scale-[1.02] transition-all">
                  Join INUPGRO Today
                </Button>
              </a>
              <a href="tel:+918209647142">
                <Button data-testid="final-cta-call" size="lg" variant="outline" className="h-14 px-8 text-base bg-white/[0.06] hover:bg-white/[0.12] text-white border-white/20 backdrop-blur-sm rounded-xl hover:scale-[1.02] transition-all">
                  <Phone className="mr-2 w-4 h-4" /> Call: +91 82096 47142
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
              <p className="text-sm text-gray-500 leading-relaxed">India's most affordable website solution for educational institutes. Professional, admission-focused websites built to help your institute get found, trusted, and chosen -- starting at just ₹15,000.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-secondary" /> +91 82096 47142</li>
                <li className="flex items-center gap-2.5"><Globe className="w-4 h-4 text-secondary" /> www.inupgro.com</li>
                <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-secondary" /> Jhalana Gram, Malviya Nagar, Jaipur (Raj)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#why" className="hover:text-white transition-colors">Why Inupgro</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
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
        href="https://wa.me/918209647142"
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
