import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useRef } from "react";
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
                Building an Educational Ecosystem
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-[2.75rem] md:text-[4.5rem] font-extrabold tracking-[-0.02em] text-white leading-[1.08]">
                Empower Your School with{" "}
                <span className="relative inline-block mt-1">
                  <span className="text-secondary">INUPGRO</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/40 rounded-full origin-left"
                  />
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-blue-100/80 font-medium max-w-2xl mx-auto leading-relaxed">
                Effortlessly manage your institute with a single, powerful platform.
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
              { num: 500, suffix: "+", label: "Institutes" },
              { num: 50000, suffix: "+", label: "Students" },
              { num: 10, suffix: " Yrs", label: "Support" },
              { num: 98, suffix: "%", label: "Satisfaction" }
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
              Trusted by Educators
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">Why INUPGRO?</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">Education shapes futures and inspires young minds, but managing a school is challenging. Inupgro makes it smarter and more efficient, giving you a trusted partner to simplify management and enhance learning.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: GraduationCap, title: "Empowering Education", desc: "Enabling meaningful learning, so educators can focus on student growth.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { icon: TrendingUp, title: "Boosting Presence", desc: "Strengthening your institute's recognition and community ties.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
              { icon: Users, title: "Fostering Connections", desc: "Uniting teachers, students, and parents for shared learning success.", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" }
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
            <p className="text-lg font-semibold text-primary/80 italic">Inupgro -- Transforming Education, Empowering Schools.</p>
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
              Simple, Transparent Pricing
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold mb-4 leading-tight">Our Offerings</h2>
            <p className="text-base md:text-lg text-blue-100/70 leading-relaxed">Three powerful solutions designed to transform your institute's digital presence and management.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="bg-white rounded-3xl p-7 lg:p-8 shadow-2xl shadow-black/20 border-2 border-secondary relative text-gray-900 md:-translate-y-3">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-secondary to-amber-400 text-secondary-foreground px-5 py-1.5 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                Core Offering
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-5">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-extrabold text-primary mb-1">Website Development</h3>
              <p className="text-sm text-gray-400 mb-5">Professional website for your institute</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">₹50,000</span>
              </div>
              <p className="text-xs font-bold text-emerald-600 mb-7 uppercase tracking-widest">One-Time Payment -- 10 Years</p>
              <ul className="space-y-2.5 text-gray-600 text-sm mb-7">
                {["Custom website design", "Domain for 10 years", "Hosting for 10 years", "Free SSL certificate", "WhatsApp integration", "Enquiry forms", "Basic SEO setup", "Maintenance & support", "Mobile responsive"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60 rounded-xl p-3.5 mb-5">
                <p className="text-xs font-semibold text-emerald-700 flex items-start gap-2">
                  <Gift className="w-4 h-4 shrink-0 mt-0.5" /> Website contract unlocks Career Pathway Tool + 1 Year Free Platform Access
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
              <p className="text-sm text-blue-200/60 mb-5">AI-powered career guidance for students</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">FREE</span>
              </div>
              <p className="text-xs text-blue-200/60 mb-7">For schools & students with website contract</p>
              <ul className="space-y-2.5 text-blue-100/80 text-sm mb-7">
                {[
                  { text: "600+ career paths", color: "text-purple-400" },
                  { text: "Personalized roadmaps", color: "text-purple-400" },
                  { text: "College recommendations", color: "text-purple-400" },
                  { text: "Market trends & salary data", color: "text-purple-400" },
                  { text: "Expert pro-tips", color: "text-purple-400" },
                  { text: "24/7 AI support", color: "text-purple-400" },
                  { text: "Showcase your institute", color: "text-purple-400" }
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
              <p className="text-sm text-blue-200/60 mb-5">Complete school management ecosystem</p>
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
                  <Gift className="w-4 h-4 shrink-0 mt-0.5" /> Free for 1 year with website contract, then subscription pricing
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
            <p className="text-blue-100/70 text-base font-medium">Sign up for website development and unlock <span className="text-secondary font-bold">all three offerings</span> -- the smartest investment for your institute.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-r from-secondary via-secondary to-amber-400 text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_70%)]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInScale}>
            <h2 className="text-xl md:text-3xl font-extrabold mb-3">The Complete Package</h2>
            <p className="text-base md:text-xl font-semibold max-w-3xl mx-auto">
              Get a <span className="bg-primary/10 px-2 py-0.5 rounded-md">₹50,000 website</span> + <span className="bg-primary/10 px-2 py-0.5 rounded-md">Free Career Pathway</span> + <span className="bg-primary/10 px-2 py-0.5 rounded-md">1 Year Free Platform</span> -- all with a single contract.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">How It Works</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">From sign-up to a complete digital ecosystem in 4 simple steps.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>
            {[
              { num: "1", title: "Contact Us", desc: "Reach out via WhatsApp or call. Share your institute details and requirements.", icon: Phone },
              { num: "2", title: "Website Built", desc: "We design and develop a professional, admission-focused website for you.", icon: Globe },
              { num: "3", title: "Go Live", desc: "Your website goes live and Career Pathway Tool is activated. Platform features available at launch.", icon: Play },
              { num: "4", title: "Grow", desc: "Attract more students, manage admissions, and grow your institute digitally.", icon: TrendingUp }
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
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">Career Pathway Tool</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">Explore 600+ career paths with personalized step-by-step roadmaps, college recommendations, and market trends. Free for schools and students who partner with Inupgro.</p>
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
                  { icon: Map, title: "Step-by-Step Roadmaps", desc: "Clear sequence of skills, courses, and milestones to reach any dream career." },
                  { icon: Lightbulb, title: "Expert Pro-Tips", desc: "Insider advice from top professionals who have paved the way." },
                  { icon: Building2, title: "College Matching", desc: "Find the right college based on career goals and academic profile." },
                  { icon: TrendingUp, title: "Market Trends", desc: "Real-time data on salary growth and job demand across India." }
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
                <p className="text-sm font-bold text-purple-800 mb-1">How to Get Access?</p>
                <p className="text-sm text-purple-600 leading-relaxed">Contract with Inupgro for website development (₹50,000) and get the Career Pathway Tool absolutely free. Your institute will also be showcased on the platform to attract students.</p>
              </div>

              <a href="https://wa.me/918441879640?text=I'm%20interested%20in%20the%20Career%20Pathway%20Tool" target="_blank" rel="noopener noreferrer">
                <Button data-testid="career-cta-explore" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-lg shadow-purple-200/50 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all">
                  Get Career Pathway Access <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-100/40 to-blue-100/30 rounded-[2rem] blur-2xl -z-10"></div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white">
                <img src={careerHomeSrc} alt="Inupgro Career Pathway - Your Future, Mapped Out" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-[70%] rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 bg-white hidden lg:block">
                <img src={careerExploreSrc} alt="Explore 600+ Career Paths on Inupgro" className="w-full h-auto" />
              </div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6 mt-12 lg:mt-20">
            {[
              { title: "For Students", desc: "Discover your ideal career path from Class 6 onwards. Get personalized roadmaps, college recommendations, and salary insights.", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { title: "For Schools", desc: "Offer world-class career guidance to your students. Your institute gets showcased on the Inupgro platform to attract enrollments.", icon: Building2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
              { title: "For Parents", desc: "Help your child make informed career decisions backed by data, expert advice, and real market trends.", icon: Users, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" }
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
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">9 Cutting Edge Platform Features</h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">A complete school management ecosystem. All 9 features will be free for 1 year for institutes who contract with Inupgro for website development.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {[
              { icon: Globe, title: "Enhanced School Visibility", desc: "Boost your online presence, making it easier for students and parents to connect.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              { icon: Newspaper, title: "Educational School News", desc: "Engage your community with updates, achievements, and important announcements.", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
              { icon: Target, title: "Targeted Marketing", desc: "Use AI insights to attract the right students and optimize enrollments efficiently.", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
              { icon: BarChart3, title: "Track School Performance", desc: "Analyze student and teacher performance to improve curriculum and teaching methods.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
              { icon: BookOpen, title: "Turn Knowledge into Income", desc: "Earn ₹2,000 per topic shared while enhancing education quality across the platform.", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
              { icon: UserPlus, title: "One-Click Onboarding", desc: "Simplify school and teacher registration with an easy, time-saving process.", color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-100" },
              { icon: FileCheck, title: "Dynamic Admission Result Publishing", desc: "Automate result publishing for faster, hassle-free admissions.", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
              { icon: GraduationCap, title: "Comprehensive Scholarship Framework", desc: "Streamline applications and distribution for easy access to financial aid.", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
              { icon: Wallet, title: "Smart Fee Ecosystem", desc: "Automate invoicing, track payments, and improve financial organization.", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" }
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
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-primary mb-4 leading-tight">Trusted by Educators</h2>
            <p className="text-base md:text-lg text-gray-500">What our partners say about working with Inupgro.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Rajesh Kumar", inst: "Sunshine Public School, Jaipur", text: "Inupgro built us a stunning website and the Career Pathway tool is a game-changer for our students. Parents love that we offer career guidance as part of the school experience." },
              { name: "Priya Sharma", inst: "Excel Coaching Institute", text: "Paying ₹50,000 once for 10 years was the best investment. Plus getting the Career Pathway tool free and upcoming platform features -- it's incredible value." },
              { name: "Dr. A. Verma", inst: "Global Degree College", text: "The website drives real enquiries via WhatsApp daily. We can't wait for the 9 platform features to launch -- the scholarship framework alone will save us hours." }
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
              { q: "What does the ₹50,000 website package include?", a: "The ₹50,000 one-time payment covers custom website design, domain registration, hosting, SSL certificate, WhatsApp integration, enquiry forms, basic SEO setup, and full maintenance and support -- all for 10 years. No hidden or recurring fees." },
              { q: "How do I get the Career Pathway Tool for free?", a: "The Career Pathway Tool is free for schools and students, but requires a website development contract with Inupgro. Once you sign up for the website (₹50,000), your institute gets access to the Career Pathway platform at no additional cost. Your institute is also showcased on the platform. Website is mandatory to join." },
              { q: "What are the 9 platform features and when do they launch?", a: "The 9 features include Enhanced School Visibility, Educational News, Targeted Marketing, Performance Tracking, Knowledge-to-Income, One-Click Onboarding, Admission Result Publishing, Scholarship Framework, and Smart Fee Ecosystem. They are launching soon and will be free for 1 year for all institutes who have a website contract with Inupgro." },
              { q: "Can I use my existing domain name?", a: "Absolutely. If you already own a domain name (like yourschool.com), we can map our newly designed website to it seamlessly." },
              { q: "Do you provide support after the website goes live?", a: "Yes. We provide ongoing technical support to ensure your website stays up and running smoothly. Minor content updates (like changing a phone number or adding a notice) are handled promptly." }
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">Let's Build a Smarter Future for Education -- Together!</h2>
            <p className="text-base md:text-lg text-blue-100/70 mb-3 leading-relaxed">Transform your school's digital presence with a professional website, free career guidance for students, and a complete management ecosystem.</p>
            <p className="text-lg text-secondary font-bold mb-10">₹50,000 one-time investment unlocks it all.</p>
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
              <p className="text-sm text-gray-500 leading-relaxed">Transforming Education, Empowering Schools. Building an educational ecosystem for smarter, more efficient school management.</p>
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
